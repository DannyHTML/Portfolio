// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import path from 'path';

const compat = new FlatCompat({
  baseDirectory: path.resolve(),
});

export default [
  //
  // ✔ Load legacy configs (Vue, TS, Prettier)
  //
  ...compat.extends(
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ),

  //
  // ✔ Ensure proper parsing for .vue files (CRITICAL)
  //
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser, // <-- REQUIRED FOR <template> parsing
      parserOptions: {
        parser: tsParser, // <-- For <script lang="ts">
      },
    },
    plugins: {
      vue,
      prettier,
    },
  },

  //
  // ✔ TypeScript files
  //
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
  },

  //
  // ✔ Global rules
  //
  {
    rules: {
      // Fix false positives in <script setup>
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'vue/no-unused-vars': 'warn',

      // Optional
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
];
