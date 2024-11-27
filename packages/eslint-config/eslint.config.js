const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
    'plugin:@typescript-eslint/recommended',
    'turbo',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ['@typescript-eslint', 'react'],

  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
      react: {
        version: 'detect', // Automatically detect the version of React
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    '.*.ts',
    'node_modules/',
    'postcss.config.js',
    'tailwind.config.js',
  ],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
  rules: {
    'no-console': 'error', // Warns on console.log statements
    eqeqeq: 'error', // Enforces the use of === and !==
    semi: ['error', 'always'], // Requires semicolons
    quotes: ['error', 'single'], // Enforces single quotes
    'react/react-in-jsx-scope': 'off', // Disable the rule that requires React to be in scope for JSX
    'react/jsx-uses-react': 'off', // Disable the rule that expects React to be used in JSX
    'react/jsx-uses-vars': 'warn',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true }, // Add this line
    ],

    // Add more common rules as needed
  },
};
