import Vue from 'vue';
import Router from 'vue-router';
import tabel from '../components/tabel/tabel.vue';
import form from '../components/form/form.vue';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/tabel',
      name:'tabel',
      component: tabel
    },
    {
      path: '/form',
      name:'form',
      component: form
    }
  ]
});
