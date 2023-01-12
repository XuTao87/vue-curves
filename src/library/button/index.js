import ButtonCom from "./button.vue";

//创建button这个插件
ButtonCom.install = (Vue) => {
    Vue.component(ButtonCom.name, ButtonCom)
}
//vue中有install方法用来开发插件，第一个参数为Vue构造器，第二个参数是一个可选的选项对象

export default ButtonCom;