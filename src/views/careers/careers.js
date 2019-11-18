import Vue from "vue";
import Careers from "./Careers.vue";
import "vue-material/dist/vue-material.min.css";
import AOS from "aos"; // 滚动动画
import "aos/dist/aos.css";
import "../../assets/css/index.less";

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-sine"
    });
  },
  render: h => h(Careers)
}).$mount("#app");
