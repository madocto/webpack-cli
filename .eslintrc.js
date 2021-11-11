module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: [
          'object',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'type'
        ]
      }
    ],
    'react/self-closing-comp': 'error'
  }
}
