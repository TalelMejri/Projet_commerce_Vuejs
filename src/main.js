import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/alert";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import 'aos/dist/aos.css';
import "../src/assets/style.css";
import { library } from '@fortawesome/fontawesome-svg-core';

import { faSpinner,faUser,faComment,faImage,faCertificate,faThumbsUp,faUserGroup, faUserCheck, faCalculator, faShop } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faLinkedin,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';
import { jwtInterceptor } from './globals/interceptors';
library.add(faSpinner,faFacebook,faLinkedin,faUser,faTwitter,faYoutube,faComment,faImage,faCertificate,
    faThumbsUp,faUserGroup,faUserCheck,faCalculator,faShop);

const pinia = createPinia()

jwtInterceptor()
createApp(App).use(pinia).use(router).use(Vue3Lottie).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
