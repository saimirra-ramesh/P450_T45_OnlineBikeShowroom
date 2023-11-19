module.exports = {
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    rules: {
      // Your other ESLint rules
    },
  };
  