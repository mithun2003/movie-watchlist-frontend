import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: [
      "projects/**/*",
      "src/main.ts",
      "**/package.json",
      "**/*.spec.ts",
      "**/.eslintrc.json",
      "**/package-lock.json",
      "**/README.md",
      "**/*.json",
      "server.ts"
    ]
  },
  ...compat
    .extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@angular-eslint/recommended",
      "plugin:@angular-eslint/template/process-inline-templates",
      "airbnb-base",
      "airbnb-typescript/base",
      "prettier"
    )
    .map((config) => ({
      ...config,
      files: ["**/*.ts"]
    })),
  {
    files: ["**/*.ts"],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",

      parserOptions: {
        project: "./tsconfig.json"
      }
    },

    rules: {
      "lines-between-class-members": [
        "error",
        "always",
        {
          exceptAfterSingleLine: true
        }
      ],

      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/lines-between-class-members": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "max-classes-per-file": "off",
      "import/prefer-default-export": "off",
      "class-methods-use-this": "off",
      "no-alert": "error",
      "no-debugger": "error",
      "no-console": "error",
      "no-extra-semi": "error",
      semi: ["error", "always"],

      "quote-props": [
        "error",
        "as-needed",
        {
          keywords: false,
          unnecessary: true,
          numbers: false
        }
      ],

      "no-irregular-whitespace": "error",
      "no-iterator": "error",

      "dot-notation": [
        "error",
        {
          allowKeywords: true
        }
      ],

      "no-constructor-return": "error",
      "no-self-compare": "error",

      "arrow-spacing": [
        "error",
        {
          before: true,
          after: true
        }
      ],

      "no-duplicate-imports": "warn",

      "prefer-const": [
        "error",
        {
          destructuring: "any",
          ignoreReadBeforeAssign: true
        }
      ],

      "no-dupe-else-if": "error",
      "no-empty": "error",
      "no-redeclare": "error",
      "no-useless-constructor": "error",

      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase"
        }
      ],

      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case"
        }
      ],
      "change-detection-strategy/on-push": "error"
    }
  },
  ...compat
    .extends(
      "plugin:@angular-eslint/template/recommended",
      "plugin:@angular-eslint/template/accessibility"
    )
    .map((config) => ({
      ...config,
      files: ["**/*.html"]
    })),
  {
    files: ["**/*.html"],
    rules: {}
  }
];
