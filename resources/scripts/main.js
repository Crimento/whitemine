import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { importPageComponent } from '@/scripts/vite/import-page-component';
import { VueCookieNext } from 'vue-cookie-next';

import '../css/tailwind.css';

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faHome,
  faNewspaper,
  faCircleQuestion,
  faCircleUser,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faChevronLeft,
  faChevronRight,
  faHome,
  faNewspaper,
  faCircleQuestion,
  faCircleUser,
  faSun,
  faMoon
);

//vuex
import { store } from './store.js';

createInertiaApp({
  resolve: (name) =>
    importPageComponent(name, import.meta.glob('../views/pages/**/*.vue')),
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .use(plugin)
      .use(store)
      .use(VueCookieNext)
      .component('font-awesome-icon', FontAwesomeIcon)
      .mixin({ methods: { route: window.route } })
      .mount(el);
  },
});
