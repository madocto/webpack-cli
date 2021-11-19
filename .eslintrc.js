// https://github.com/AlloyTeam/eslint-config-alloy
module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'plugin:react-hooks/recommended'
  ],
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
    'react/self-closing-comp': 2,
    'react/jsx-no-constructed-context-values': 0,
    'react/no-namespace': 0,
    'react/no-unstable-nested-components': 0,
    'no-unused-vars': 2,
    '@typescript-eslint/consistent-type-imports': 1,
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 0
  }
}
