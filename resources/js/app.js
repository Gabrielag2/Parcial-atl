require('./bootstrap');

//import librerias

import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

//importar componentes
import App from './components/App.vue';


//importar routes

import { routes } from "./routes";


const router = new VueRouter({
    mode: 'History',
   routes: routes
})




const app = new Vue({
     el: '#app',
     router: router,
     render(h) { return h(App) }

})