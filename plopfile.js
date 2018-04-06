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
      console.log('response*****', response)
      const actions = [
        // create index file
        {
          type: 'add',
          path: `${destination}/${response.path}/${response.name}/index.js`,
          templateFile: `./plopTemplates/${response.template}/index.js`,
        },
        {
          type: 'add',
          path: `${destination}/${response.path}/${response.name}/index.stories.js`,
          templateFile: `./plopTemplates/${response.template}/index.stories.js`,
        },
        {
          type: 'add',
          path: `${destination}/${response.path}/${response.name}/styles.scss`,
          templateFile: `./plopTemplates/${response.template}/styles.scss`,
        },
        {
          type: 'add',
          path: `${destination}/${response.path}/${response.name}/assets/foo.txt`,
        },
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
