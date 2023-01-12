import heard from "./heard.vue";

//创建button这个插件
heard.install = (Vue) => {
    Vue.component(heard.name, heard)
}
//vue中有install方法用来开发插件，第一个参数为Vue构造器，第二个参数是一个可选的选项对象

export default heard;