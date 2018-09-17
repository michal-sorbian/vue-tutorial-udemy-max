import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

Vue.component("appHeader", Header);
Vue.component("app-list", List);
Vue.component("app-footer", Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
