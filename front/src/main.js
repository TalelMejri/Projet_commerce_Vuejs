import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import "bootstrap/js/src/dropdown";

import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

import 'aos/dist/aos.css';

import { library } from '@fortawesome/fontawesome-svg-core';

import HighchartsVue from 'highcharts-vue'
import { faSpinner,faUser,faComment,faImage,faCertificate,faAdd,faList,faBell,faCircleCheck,faThumbsUp,faUserGroup,faBars,faCartShopping, faUserCheck, faCalculator, faShop,faEyeSlash,faEye,faHouseUser,faAngleRight,faCircle,faGrip} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faLinkedin,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';
import { jwtInterceptor } from './globals/interceptors';
import Vue from 'vue';
import VueConfetti from 'vue-confetti';

library.add(faSpinner,faFacebook,faLinkedin,faUser,faTwitter,faAdd,faYoutube,faComment,faCircleCheck,faImage,faCertificate,faBars,faCartShopping,
    faThumbsUp,faUserGroup,faList,faUserCheck,faCalculator,faShop,faEyeSlash,faEye,faBell,faAngleRight,faCircle,faHouseUser,faGrip);

const pinia = createPinia()

jwtInterceptor()

createApp(App).use(pinia).use(VueConfetti).use(HighchartsVue).use(router).use(Vue3Lottie).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
