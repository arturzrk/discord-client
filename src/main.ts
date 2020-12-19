import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import buildDependencyContainer from './app.container';

class AppBootstrap {
  constructor() {
    this.loadDependencyContainer();
    this.loadVueApp();
  }

  // eslint-disable-next-line class-methods-use-this
  private loadDependencyContainer(): void {
    buildDependencyContainer();
  }

  // eslint-disable-next-line class-methods-use-this
  private loadVueApp(): void {
    Vue.config.productionTip = false;
    Vue.use(BootstrapVue);
    Vue.use(IconsPlugin);
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
}

// eslint-disable-next-line no-new
new AppBootstrap();
