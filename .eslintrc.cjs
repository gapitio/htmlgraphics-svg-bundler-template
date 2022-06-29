module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
  ],
  plugins: ["import"],
  rules: {
    "array-callback-return": ["error", { allowImplicit: true }],
    "consistent-return": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off", // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "no-continue": "off",
    "no-dupe-else-if": "error",
    "no-param-reassign": ["error", { props: false }], // Disallow reassignment of function parameters
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    // Disallow certain syntax forms
    "no-restricted-syntax": [
      "error",
      {
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        selector: "ForInStatement",
      },
      {
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        selector: "LabeledStatement",
      },
      {
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        selector: "WithStatement",
      },
    ],
    "unicorn/filename-case": [
      "error",
      { cases: { camelCase: true, pascalCase: true, kebabCase: true } },
    ],
    "unicorn/no-useless-undefined": ["error", { checkArguments: false }],
    "unicorn/prefer-module": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prevent-abbreviations": "off", // Common abbreviations are known and readable
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
      ],
    },
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
