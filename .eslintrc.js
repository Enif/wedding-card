const path = require('path');

module.exports = {
  "extends": [
    "react-app",
    "airbnb",
    "airbnb-typescript",
  ],
  "rules": {
    "max-len": ["error", { "code": 120, "ignoreComments": true }],
    "react/require-default-props": 0,
    "import/prefer-default-export": "off",
    'default-case': 0,
    'consistent-return': 0,
    'linebreak-style': 0,
    'import/extensions': [
      'error',
      {
        'ts': 'never',
        'tsx': 'never',
        'svg': 'always',
        'png': 'always',
        'jpg': 'always',
        'jpeg': 'always',
      }
    ],
  },
  "overrides": [
    {
      "files": ["**/*.ts?(x)"],
      "rules": {
        // "additional-typescript-only-rule": "warn"
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 12,
    project: [path.resolve(__dirname, './tsconfig.json')],
    tsconfigRootDir: __dirname,
  },
}
