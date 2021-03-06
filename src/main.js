import Vue from 'vue'
import App from './components/App.vue'
import router from './router'
import store from './store'
import VueProgress from 'vue-progress'
import ToggleButton from 'vue-js-toggle-button'
import (/* webpackPreload: true */ 'typeface-source-code-pro/index.css')

Vue.use(VueProgress);
Vue.use(ToggleButton);

Vue.config.productionTip = false

new Vue({
  router,
  store,
	beforeCreate() {
		this.$store.commit('initializeStore');
	},
  render: h => h(App)
}).$mount('#app')
