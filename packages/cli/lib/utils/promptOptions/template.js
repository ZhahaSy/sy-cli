const { choices } = require('./templateUrlMap')
module.exports = [
  {
    type: 'list',
    name: `templateUrl`,
    message: '请选择要下载的模板',
    choices,
  },
  {
    type: 'list',
    name: `gitDownloadType`,
    message: '请选择要下载方式',
    choices: [
      { name: 'ssh', value: 'ssh' },
      { name: 'url', value: 'url' },
    ]
  },
]