import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes.js'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  // samo 'routes' - mapowanie, daje to samo co wyzej, syntax ES6
  mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
