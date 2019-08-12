import SildeDialog from './CommonDialog/index'

const components = [
  SildeDialog
]

const install = function(Vue){
  if(install.installed) return
  install.installed = true
  components.map(component=>{
    Vue.component(component.name,component)
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  ...components
}