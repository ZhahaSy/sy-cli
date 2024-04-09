module.exports = [
  {
    type: 'list',
    name: `templateUrl`,
    message: '请选择要下载的模板',
    choices: [
      { name: 'vue + mobile', value: 'vue-m' },
      { name: 'react + mobile', value: 'react-m' },
    ]
  },
  ...defaultPrompt,
]