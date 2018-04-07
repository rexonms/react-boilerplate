const promptDirectory = require('inquirer-directory');
const fs = require('fs');

const getAllFilesOfPlopTemplates = rootPath => fs.readdirSync(rootPath).map(file => file);
const templateRoot = './plop/plopTemplates';

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
        }
      },
      {
        type: 'list',
        name: 'template',
        message: 'Which template would you like to use',
        choices: getAllFilesOfPlopTemplates(templateRoot),
      },
    ],
    actions(response) {
      console.log('response*****', response);
      const destination = './src';
      let { name } = response;
      const { path } = response;
      const { template } = response;
      const actions = [];

      name = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

      // create index file
      actions.push({
        type: 'add',
        path: `${destination}/${path}/${name}/index.js`,
        templateFile: `${templateRoot}/${template}/index.hbs`,
      });

      // Create Stories
      actions.push({
        type: 'add',
        path: `${destination}/${path}/${name}/index.stories.js`,
        templateFile: `${templateRoot}/${template}/index.stories.hbs`,
      });

      // Create StyleSheet
      actions.push({
        type: 'add',
        path: `${destination}/${path}/${name}/${name}.scss`,
        templateFile: `${templateRoot}/${template}/Styles.scss`,
      })

      // Create assets folder
      actions.push({
        type: 'add',
        path: `${destination}/${path}/${name}/assets/foo.temp`,
      });

      // Create test file
      actions.push({
        type: 'add',
        path: `${destination}/${path}/${name}/__tests__/index.js`,
        templateFile: `${templateRoot}/${template}/__tests__/index.hbs`,
      })

      // Create snapshot file
      actions.push({
        type: 'add',
        path: `${destination}/${path}/${name}/__tests__/snapshots/index.js`,
        templateFile: `${templateRoot}/${template}/__tests__/snapshots/index.hbs`,
      })

      return actions
    },
  });
};

module.exports = generator;
