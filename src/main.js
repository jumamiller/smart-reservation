import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import vuetify from './plugins/vuetify'
import store from './store'
import listener from "@/mixins/listener";
import("vuetify/dist/vuetify.min.css");
Vue.config.productionTip = false;
// eslint-disable-next-line no-global-assign
Event = new Vue()
Vue.use(Toast)
new Vue({
  router,
  vuetify,
  store,
  mixins: [listener],
  render: (h) => h(App)
}).$mount("#app");
