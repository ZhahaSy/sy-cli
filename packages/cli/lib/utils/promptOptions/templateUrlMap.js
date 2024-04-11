const templateUrlMap = {
  'vue-m': {
    ssh: 'direct:git@github.com:easy-temps/vue3-vant-mobile.git#main',
    url: 'direct:https://github.com/easy-temps/vue3-vant-mobile.git#main',
  },
  'vue-admin': {
    ssh: 'direct:git@github.com:buqiyuan/vue3-antdv-admin.git#main',
    url: 'direct:https://github.com/buqiyuan/vue3-antdv-admin.git#main',
  },
  'react-pc': {
    ssh: 'direct:git@github.com:Mywbj/react18-template.git#main',
    url: 'direct:https://github.com/Mywbj/react18-template.git#main',
  }
}

const choices = [
  { name: 'vue3 + vite + pinia + vant + i18n + ts + rem适配', value: 'vue-m' },
  { name: 'vue3 + vite + pinia + antdv + ts', value: 'vue-admin' },
  { name: 'react18 + ts + redux + react-router', value: 'react-pc' },
]

module.exports = {
  templateUrlMap,
  choices,
}