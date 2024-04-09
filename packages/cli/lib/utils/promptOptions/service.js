const defaultPrompt = require('./default')
module.exports = [
  {
    type: 'list',
    name: `frameName`,
    message: '你要使用什么框架',
    choices: [
      { name: 'express', value: 'express' },
      { name: 'koa', value: 'koa' },
    ]        
  },
  ...defaultPrompt,
]