// https://github.com/AlloyTeam/eslint-config-alloy
module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['alloy', 'alloy/react', 'alloy/typescript', 'plugin:react-hooks/recommended'],
  plugins: ['import'],
  env: {},
  globals: {},
  rules: {
    // 自定义你的规则
    'import/order': [
      'warn',
      {
        groups: ['object', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
      },
    ],
    'react/self-closing-comp': 'error',
    'no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-imports': 'warn',
  },
};
