import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "@/styles/index.scss";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import moment from "moment"; //导入文件
Vue.prototype.$moment = moment; //赋值使用

moment.locale("zh-cn"); //需要汉化

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
