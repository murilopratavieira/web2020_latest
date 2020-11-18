import Vue from "vue";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import App from "./App";
import router from "./router";
//import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  vuetify,
  components: { App },
  template: "<App/>"
});
