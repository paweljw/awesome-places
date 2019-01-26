module.exports = {
    'extends': [
        'airbnb',
        'prettier',
        'plugin:react/recommended',
    ],
    'plugins': [
        'prettier',
        'react'
    ],
    'rules': {
        'prettier/prettier': ['error', {
            'singleQuote': true,
            'trailingComma': 'es5',
        }],
        'react/jsx-filename-extension': 'off',
        "react/prefer-es6-class": 1,
        "jsx-a11y/label-has-for": 'off'
    },
    'parserOptions': {
        "ecmaVersion": 6,
        "sourceType": "module",
        'ecmaFeatures': {
            'jsx': true
        }
    },
    "env": {
        "node": true, // this is the best starting point
        "es6": true // enables es6 features
    },
    "parser": "babel-eslint", // needed to make babel stuff work properly
};
