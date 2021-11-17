module.exports = {
  env: {
    browser: true,
    es2021: true,
    jasmine: true,
    jest: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['react'],
  // "off" or 0 - turn the rule off
  // "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
  // "error" or 2 - turn the rule on as an error (exit code will be 1)
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-uses-react': 2,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': [
      'error',
      {
        // see https://prettier.io/docs/en/options.html
        printWidth: 120, // 一行换行的最大长度，默认 80
        singleQuote: true, // 字符串是否使用单引号代替双引号，默认false，使用双引号。JSX quotes 会忽略这个选项
        bracketSpacing: true, // 对象大括号直接是否有空格，默认为true。true: { foo: bar }，false: {foo: bar}
        // htmlWhitespaceSensitivity see https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting
        htmlWhitespaceSensitivity: 'ignore', // 优化html闭合标签不换行的问题
      },
    ],
  },
};
