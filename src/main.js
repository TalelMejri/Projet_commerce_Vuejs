import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/alert";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faSpinner,faFacebook,faLinkedin);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
