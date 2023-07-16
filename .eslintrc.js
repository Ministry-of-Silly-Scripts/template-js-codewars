module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
  ],
  plugins: ['prettier', 'jest-formatting', 'jest'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'max-len': 'off',
    'no-underscore-dangle': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    camelcase: 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
      },
    ],
  },
};