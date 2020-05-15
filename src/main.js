import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import Antd from "ant-design-vue";
//import "ant-design-vue/dist/antd.less"
import {
  Button,
  Form,
  Input,
  Icon,
  Layout,
  Menu,
  Badge,
  Breadcrumb,
  Radio,
  Table,
  Modal,
  Popconfirm
} from "ant-design-vue"

//Vue.use(Antd)

Vue.use(Button)
Vue.use(Form)
Vue.use(Form.Item)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Badge)
Vue.use(Breadcrumb)
Vue.use(Radio)
Vue.use(Table)
Vue.use(Modal)
Vue.use(Popconfirm)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");