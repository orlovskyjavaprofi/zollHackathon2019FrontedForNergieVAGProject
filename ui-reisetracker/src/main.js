import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueGoogleMaps, {
  load: {
    key: "Input-Yours-google Api Key",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
