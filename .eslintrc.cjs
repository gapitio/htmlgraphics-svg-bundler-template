module.exports = {
  plugins: ["@typescript-eslint", "eslint-comments", "promise", "unicorn"],
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    project: ["./tsconfig.eslint.json"],
    extraFileExtensions: [".cjs"],
  },
  rules: {
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",

    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "import/no-default-export": "warn",

    // Dev dependencies should be allowed when using rollup
    "import/no-extraneous-dependencies": "off",

    // Common abbreviations are known and readable
    "unicorn/prevent-abbreviations": "off",

    "unicorn/filename-case": [
      "error",
      {
        cases: { camelCase: true, pascalCase: true },
      },
    ],

    // Disallow certain syntax forms
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],

    // Disallow reassignment of function parameters
    "no-param-reassign": ["error", { props: false }],

    // Disallow duplicate conditions in if-else-if
    "no-dupe-else-if": "error",

    "@typescript-eslint/consistent-type-imports": "error",
  },
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
    },
  ],
};
