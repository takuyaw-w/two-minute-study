module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-recommended", "@vue/typescript/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "no-console": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: ["property"],
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: ["class", "enum", "interface", "typeAlias", "typeParameter"],
        format: ["PascalCase"],
      },
      {
        selectro: "variable",
        modifiers: ["const"],
        format: ["camelCase", "UPPER_CASE"],
      },
    ],
  },
};
