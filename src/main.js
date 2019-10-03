import Vue from 'vue'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'material-design-icons/iconfont/material-icons.css';

import App from './App.vue'

Vue.use(MuseUI);
Vue.use(require('vue-resource'));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  },
}).$mount('#allsite')