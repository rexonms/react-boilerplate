const promptDirectory = require('inquirer-directory');
const fs = require('fs');
const getActions = require('./plop/actions/actions');

const getAllFilesOfPlopTemplates = rootPath => fs.readdirSync(rootPath).map(file => file);
const templateRoot = './plop/plopTemplates';
const TEMPLATE_TYPES = {
  StatefulComponent: 'StatefulComponent',
  StatelessComponent: 'StatelessComponent',
  ConnectedComponent: 'ConnectedComponent',
};
const commonActionName = ['index', 'style', 'test', 'snapshot'];
const StatefulComponent = ['story', 'assetBulbOn', 'assetBulbOff'];
const StatelessComponent = ['story', 'emptyAsset'];
const ConnectedComponent = ['indexContent', 'ducks'];

const generator = (plop) => {
  plop.setPrompt('directory', promptDirectory);
  // create your generators here
  plop.setGenerator('React Component Generator', {
    description: 'Plop generator for React components',
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
        message: 'What is the name of your component?',
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
    actions(inputs) {
      const userResponse = inputs;
      const { name } = inputs;
      let actions = [];
      console.log('userResponse*****', userResponse);
      StatefulComponent.push(...commonActionName);
      StatelessComponent.push(...commonActionName);
      ConnectedComponent.push(...commonActionName);
      console.log('StatefulComponent', StatefulComponent);

      // Inject additional information to the usersResponse
      userResponse.templateRoot = templateRoot;
      userResponse.destination = './src';
      userResponse.name = `${name.charAt(0).toUpperCase()}${name.slice(1)}`; // Making sure the name is always Initial Cap
      userResponse.nameProp = `${name.charAt(0).toLowerCase()}${name.slice(1)}`;
      userResponse.nameReducer = name.toUpperCase();
      userResponse.namePageData = `this.props.${name}`;

      switch (userResponse.template) {
        case TEMPLATE_TYPES.StatefulComponent:
          actions = StatefulComponent;
          break;
        case TEMPLATE_TYPES.StatelessComponent:
          actions = StatelessComponent;
          break;
        case TEMPLATE_TYPES.ConnectedComponent:
          actions = ConnectedComponent;
          break;
        default:
          console.log(`Template not found for ${userResponse.template}`);
      }
      return actions.map(actionName => getActions(actionName, userResponse));
    },
  });
};

module.exports = generator;
