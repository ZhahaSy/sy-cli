
const { prompt } = require('inquirer'); // 引入inquirer模块的prompt方法，用于创建交互式命令行界面
const downloadGitRepo = require('download-git-repo')
const { templateUrlMap } = require('./templateUrlMap')

const isUtils = require('./utils/is')
const promptOptions = require('./utils/promptOptions/index'); // 引入自定义的prompt选项配置

class Asker {
  constructor(projectType, projectName, options) {
    this.options = {
      ...options,
      projectName,
      projectType,
      isTemplate: isUtils.isTemplate(projectType),
      isWeb: isUtils.isWeb(projectType),
      isService: isUtils.isService(projectType),
    }
  }

  run() {
    
  }

  downloadGitRepoFromPreset() {
    const url = templateUrlMap[this.options.templateUrl][this.options.gitDownloadType]
    console.log(url);
    downloadGitRepo(url, this.options.projectName, {clone: true},  function (err) {
      console.log(err)
    })
  }

  async ask() {
    const answers = await prompt(promptOptions[this.options.projectType] || []);
    this.options = {
      ...this.options, ...answers
    }

    // 模版的下载逻辑
    if (this.options.isTemplate) {
      this.downloadGitRepoFromPreset()
    }
  }
}

module.exports = Asker