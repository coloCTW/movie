// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Carousel,CarouselItem } from 'element-ui';
import App from './App'
import $ from 'jquery'

Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
