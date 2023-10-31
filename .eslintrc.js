module.exports = {
  root: true,
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:react/jsx-runtime', 'plugin:storybook/recommended', 'eslint:recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ecmaFeatures: {
    impliedStrict: true, //常にStrictMode
  },
  rules: {
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'prefer-template': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    "@typescript-eslint/no-var-requires": "off",
    'no-unreachable': ['error'], //到達できないコードはエラー
  },
}
