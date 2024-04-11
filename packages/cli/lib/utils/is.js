const isTemplate = (projectType) => {
  return projectType === 'template'
}

const isWeb = (projectType) => {
  return projectType === 'web'
}

const isService = (projectType) => {
  return projectType === 'service'
}

module.exports = {
  isTemplate,
  isWeb,
  isService,
}