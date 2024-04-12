module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    // Script parser for `<script>`
    js: 'espree',
    ecmaVersion: 2021,
  },
  // 添加 prettier，通过使用eslint-config-prettier配置，能够关闭一些不必要的或者是与prettier冲突的lint选项
  // 这样我们就不会看到一些error同时出现两次。使用的时候需要确保，这个配置在extends的最后一项。
  extends: [
    'airbnb-base',
    'prettier',
    // '@vue/eslint-config-prettier',
  ],
  // eslint-plugin-prettier插件会调用prettier对你的代码风格进行检查，其原理是先使用prettier对你的代码进行格式化，
  // 然后与格式化之前的代码进行对比，如果过出现了不一致，这个地方就会被prettier进行标记。
  plugins: ['import', 'prettier'],
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'global-require': 'off',
    'no-unused-expressions': 'off',
    'import/no-dynamic-require': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        tabWidth: 2,
        indent: 2,
        semi: false,
        printWidth: 120,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        map: [['@', './src']],
      },
    },
  },
}
