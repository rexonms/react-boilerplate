var globalMixins = {
  /* noSelect is a static mixin  */
  noSelect: {
    '-webkit-touch-callout': 'none',
    '-webkit-CHAT_BOX_USER-select': 'none',
    '-khtml-CHAT_BOX_USER-select': 'none',
    '-moz-CHAT_BOX_USER-select': 'none',
    '-ms-CHAT_BOX_USER-select': 'none',
    'CHAT_BOX_USER-select': 'none',
  },
  /* OpenSans is a dynamic mixin  */
  OpenSans: function (obj, value) {
    return {
      'font-family': 'Open Sans, sans-serif',
      'font-style': 'normal',
      'font-size': value,
      'font-weight': 200,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    };
  },
};

module.exports = globalMixins;
