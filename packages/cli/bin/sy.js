#! /usr/bin/env node

const { program } = require('commander');
const create = require('../lib/create');

program.version(`v${require('../package.json').version}`).usage('<command> [option]')

program
  .command('create <project-name>')
  .description('create a project!')
  .option('-f, --force', 'overwrite directory if it exists')
  .action((projectName, options) => {
    // console.log(projectName, options);
    create(projectName, options)
  })

// 必传！
program.parse(process.argv)
