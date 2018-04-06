const promptDirectory = require('inquirer-directory');
const fs = require('fs');

const getAllFilesOfPlopTemplates = rootPath => fs.readdirSync(rootPath).map(file => file);
const destination = './src';
const generator = (plop) => {
  plop.setPrompt('directory', promptDirectory);
  // create your generators here
  plop.setGenerator('createComponent', {
    description: 'Creates component boilerplate ',
    prompts: [
      {
        type: 'directory',
        name: 'path',
        message: 'Which component do you want to create?',
        basePath: './src',
      },
      {
        type: 'input',
        name: 'name',
        message: 'name of the component'
      },
      {
        type: 'list',
        name: 'template',
        message: 'Which template would you like to use',
        choices: getAllFilesOfPlopTemplates('./plopTemplates'),
      },
    ],
    actions(response) {
      // console.log('response*****', response);
      response.name = `${response.name.charAt(0).toUpperCase()}${response.name.slice(1)}`
      const actions = [
        // creates index file
        {
          type: 'add',
          path: `${destination}/${response.path}/${response.name}/index.js`,
          templateFile: `./plopTemplates/${response.template}/index.js`,
        },
        // crates story file
        {
          type: 'add',
          path: `${destination}/${response.path}/${response.name}/index.stories.js`,
          templateFile: `./plopTemplates/${response.template}/index.stories.js`,
        },
        // creates style sheet
        {
          type: 'add',
          path: `${destination}/${response.path}/${response.name}/${response.name}.scss`,
          templateFile: `./plopTemplates/${response.template}/styles.scss`,
        },
        // create assets folder
        {
          type: 'add',
          path: `${destination}/${response.path}/${response.name}/assets/foo.txt`,
        },
        // create text file
        {
          type: 'add',
          path: `${destination}/${response.path}/${response.name}/__tests__/index.js`,
          templateFile: `./plopTemplates/${response.template}/__tests__/index.js`,
        },
      ]

      return actions
    },
  })
}

module.exports = generator
