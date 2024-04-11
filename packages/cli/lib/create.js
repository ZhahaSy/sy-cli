const fs = require('fs-extra') // 引入fs-extra模块，用于文件操作
const path = require('path') // 引入path模块，用于处理文件路径
const chalk = require('chalk') // 引入chalk模块，用于在控制台中输出彩色文本
const { prompt } = require('inquirer'); // 引入inquirer模块的prompt方法，用于创建交互式命令行界面
const Asker = require('./Asker');

// 定义ask函数，用于提问并获取用户输入
const ask = async (questions) => {
  const answers = await prompt(questions);
  return answers;
}

// 定义create函数，用于创建项目
const create = async (projectName, options) => {
  const cwd = options.cwd || process.cwd(); // 获取当前工作目录
  const targetDir = path.resolve(cwd, projectName || '.'); // 解析目标目录路径

  // 检查目标目录是否已存在
  if (fs.existsSync(targetDir)) {
    // 使用逻辑运算符简化判断
    if (!options.force) {
      const { isOverwrite } = await ask({
        type: 'confirm',
        name: 'isOverwrite',
        message: `当前路径下，项目 ${chalk.cyan(projectName)} 已存在，是否覆盖？`,
      });

      if (!isOverwrite) return; // 早期返回减少嵌套
    }

    console.log(`\nRemoving ${chalk.cyan(targetDir)}...`);
    await fs.remove(targetDir);
    console.log(`\nRemove ${chalk.cyan(targetDir)} success！`);
  }

  // 询问用户要创建的项目类型
  const { projectType } = await ask([{
    type: 'list',
    name: 'projectType',
    message: '你要创建什么项目？',
    choices: [
      { name: 'web', value: 'web' },
      { name: 'service', value: 'service' },
      { name: 'template', value: 'template' },
    ]
  }]);

  const asker = new Asker(projectType, projectName, options)
  console.log(asker);
  asker.ask();
}

module.exports = create ; // 导出create函数