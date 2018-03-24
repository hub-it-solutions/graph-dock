
// Template
import app_nav from './../vue/components/nav.vue'

const components = {

    // Template
    app_nav

}

components.install = (Vue) => {

    for (const componentName in components) {
        const component = components[componentName]
        if (component && componentName !== 'install') {
            Vue.component(component.name, component)
        }
    }

}

export default components