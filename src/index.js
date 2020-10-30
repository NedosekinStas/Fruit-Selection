import './styles/index.css';
import './styles/index.scss';

import Vue from 'vue';

Vue.component('example-component', require('./components/Example.vue').default)

const app = new Vue({
  el: '#app'  
})