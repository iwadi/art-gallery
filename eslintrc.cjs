module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'airbnb',
        'airbnb-typescript',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
        jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'jsx-a11y',
        'prettier',
    ],
    rules: {
        'prettier/prettier': [
        'error',
        {
            semi: true, // Требует точку с запятой в конце операторов
            singleQuote: true, // Использовать одинарные кавычки
            tabWidth: 2, // Отступ в 2 пробела
            useTabs: false, // Использовать пробелы, а не табы
        },
        ],
        // Пример переопределения правила Eslint
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
        // Отключим правило, которое часто вызывает проблемы в TS
        'import/prefer-default-export': 'off',
    },
    settings: {
        react: {
        version: 'detect',
        },
        // Настройка для resolver'а import/export
        'import/resolver': {
        typescript: {},
        },
    },
};