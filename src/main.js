import Vue from 'vue';

import titleMixin from '@/mixins/title';

import router from '@/router';

import { VuePlausible } from 'vue-plausible';

import App from './App.vue';
import './index.css';

Vue.use(VuePlausible);

Vue.mixin(titleMixin);

Vue.config.productionTip = false;
Vue.$plausible.enableAutoPageviews();

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
