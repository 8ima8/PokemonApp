import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  // primero extiende React y Prettier
  ...compat.extends(
    'plugin:react/recommended',
    'plugin:prettier/recommended' // <— esto agrega eslint-config-prettier + plugin-prettier
  ),

  // tu bloque de reglas personalizado
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier, // <— registra el plugin para poder usar la regla prettier/prettier
    },
    rules: {
      // desactiva la regla de React obsoleta
      'react/react-in-jsx-scope': 'off',
      // seguridad en target="_blank"
      'react/jsx-no-target-blank': ['warn', { allowReferrer: true }],
      // lanza error si el formato no sigue tus reglas de Prettier
      'prettier/prettier': 'error',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
];
