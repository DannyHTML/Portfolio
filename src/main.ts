import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MotionPlugin } from '@vueuse/motion';

library.add(faBars, faTimes);

const app = createApp(App);

app.use(MotionPlugin);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
