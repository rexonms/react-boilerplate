const promptDirectory = require('inquirer-directory');
const fs = require('fs');
const getActions = require('./plop/actions/actions');

const getAllFilesOfPlopTemplates = rootPath => fs.readdirSync(rootPath).map(file => file);
const templateRoot = './plop/plopTemplates';
const TEMPLATE_TYPES = {
  StatefulComponent: 'StatefulComponent',
  StatelessComponent: 'StatelessComponent',
};
const generator = (plop) => {
  plop.setPrompt('directory', promptDirectory);
  // create your generators here
  plop.setGenerator('React Component Generator', {
    description: 'Plop generator for React Components',
    prompts: [
      {
        type: 'directory',
        name: 'path',
        message: 'Where should the component be saved?',
        basePath: './src',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of you component?',
        validate: (value) => {
          if ((/.+/).test(value)) { return true; }
          return 'Project name is required';
        },
      },
      {
        type: 'list',
        name: 'template',
        message: 'Which template would you like to use',
        choices: getAllFilesOfPlopTemplates(templateRoot),
      },
    ],
    actions(userResponse) {
      console.log('userResponse*****', userResponse);
      const { name } = userResponse;
      const response = userResponse;
      let actions = [];
      const commonActionName = ['index', 'story', 'style', 'test', 'snapshot'];
      const StatefulComponent = ['assetBulbOn', 'assetBulbOff'];
      const StatelessComponent = ['emptyAsset'];
      StatefulComponent.push(...commonActionName);
      StatelessComponent.push(...commonActionName);

      // Inject additional information to the usersResponse
      response.templateRoot = templateRoot;
      response.destination = './src';
      response.name = `${name.charAt(0).toUpperCase()}${name.slice(1)}`; // Making sure the name is always Initial Cap

      switch (response.template) {
        case TEMPLATE_TYPES.StatefulComponent:
          actions = StatefulComponent;
          break;
        case TEMPLATE_TYPES.StatelessComponent:
          actions = StatelessComponent;
          break;
        default:
          console.log(`Template not found for ${response.template}`);
      }
      return actions.map(actionName => getActions(actionName, response));
    },
  });
};

module.exports = generator;
