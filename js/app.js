
window._ = require('lodash');

/*
 |--------------------------------------------------------------------------
 | NPM Library Packeges
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

    import Vue from 'vue'
    import buefy from 'buefy'
    import VueRouter from 'vue-router'

    window.Vue = Vue

    Vue.use(VueRouter)
    Vue.use(buefy, {defaultIconPack: 'fa'})

/*
 |--------------------------------------------------------------------------
 | Library Configuration
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

/*
 |--------------------------------------------------------------------------
 | Local Resources
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


    import routes from './routes';
    import elements from './elements';


    Vue.use(elements)
    Vue.prototype.$app = window.$app = app;

    let router = new VueRouter({ routes })
    new Vue({ router }).$mount('#app')

    //require('./script');
	