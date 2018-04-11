const getActions = (actionName, CHAT_BOX_USERResponse) => {
  const { destination } = CHAT_BOX_USERResponse;
  const { path } = CHAT_BOX_USERResponse;
  const { name } = CHAT_BOX_USERResponse;
  const { templateRoot } = CHAT_BOX_USERResponse;
  const { template } = CHAT_BOX_USERResponse;
  console.log('actionName', actionName);
  console.log('CHAT_BOX_USERResponse', CHAT_BOX_USERResponse);

  const actions = {
    index: {
      type: 'add',
      path: `${destination}/${path}/${name}/index.js`,
      templateFile: `${templateRoot}/${template}/index.hbs`,
    },
    story: {
      type: 'add',
      path: `${destination}/${path}/${name}/index.stories.js`,
      templateFile: `${templateRoot}/${template}/index.stories.hbs`,
    },
    style: {
      type: 'add',
      path: `${destination}/${path}/${name}/${name}.scss`,
      templateFile: `${templateRoot}/${template}/Styles.scss`,
    },
    emptyAsset: {
      type: 'add',
      path: `${destination}/${path}/${name}/assets/foo.temp`,
      templateFile: `${templateRoot}/${template}/assets/foo.temp`,
    },
    assetBulbOn: {
      type: 'add',
      path: `${destination}/${path}/${name}/assets/bulbOn.svg`,
      templateFile: `${templateRoot}/${template}/assets/bulbOn.svg`,
    },
    assetBulbOff: {
      type: 'add',
      path: `${destination}/${path}/${name}/assets/bulbOff.svg`,
      templateFile: `${templateRoot}/${template}/assets/bulbOff.svg`,
    },
    test: {
      type: 'add',
      path: `${destination}/${path}/${name}/__tests__/index.js`,
      templateFile: `${templateRoot}/${template}/__tests__/index.hbs`,
    },
    snapshot: {
      type: 'add',
      path: `${destination}/${path}/${name}/__tests__/snapshots/index.js`,
      templateFile: `${templateRoot}/${template}/__tests__/snapshots/index.hbs`,
    },
  };

  return actions[actionName];
};

module.exports = getActions;
