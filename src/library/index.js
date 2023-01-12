import ButtonCom from "./button";
import heard from "./heard"
const components = [
    ButtonCom,
    heard
]
const install = (Vue, options) => {
    components.map((component) => {
        console.log(component);
        Vue.component(component.name, component)
    })
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    heard,
    ButtonCom
}

export default {
    install
}