// const aliases = require('./internal/webpack/aliases');

module.exports = {
    parser: 'babel-eslint',
    extends: 'airbnb',
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            defaultParams: true,
        },
    },
    rules: {
        // A jsx extension is not required for files containing jsx
        'react/jsx-filename-extension': 0,
        // This rule struggles with flow and class properties
        'react/sort-comp': 0,
        // ignore linebreak style. the CRLF / LF endings wont matter
        // if a windows CHAT_BOX_USER correctly converts CRLF to LF upon commits otherwise
        // there are errors every line.
        'linebreak-style': 0,
    },
    settings: {
        // 'import/resolver': {
        //     webpack: {
        //         config: {
        //             resolve: {
        //                 alias: aliases,
        //             },
        //         },
        //     },
        // },
    },
};