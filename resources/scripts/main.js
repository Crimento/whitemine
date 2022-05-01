import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { importPageComponent } from '@/scripts/vite/import-page-component';
import { VueCookieNext } from 'vue-cookie-next';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import { DateTime } from 'luxon';
import VSwitch from '@lmiller1990/v-switch';

import '../css/tailwind.css';
import 'animate.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
  faHome,
  faNewspaper,
  faCircleQuestion,
  faCircleUser,
  faCircleCheck,
  faSun,
  faMoon,
  faCircleXmark,
  faTriangleExclamation,
  faList,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faChevronLeft,
  faChevronRight,
  faTimes,
  faHome,
  faNewspaper,
  faCircleQuestion,
  faCircleUser,
  faCircleCheck,
  faSun,
  faMoon,
  faCircleXmark,
  faTriangleExclamation,
  faList,
  faPenToSquare
);

//vuex
import { store } from './store.js';

const boolNormalizer = (bool) => {
  if (bool === 'true') {
    return true;
  }
  if (bool === 'false') {
    return false;
  }
  return null;
};

createInertiaApp({
  resolve: (name) => importPageComponent(name, import.meta.glob('../views/pages/**/*.vue')),
  setup({ el, app, props, plugin }) {
    const myApp = createApp({ render: () => h(app, props) })
      .use(plugin)
      .use(store)
      .use(VueCookieNext)
      .use(VueReCaptcha, { siteKey: props.initialPage.props.recaptcha_site_key })
      .component('v-switch', VSwitch)
      .component('font-awesome-icon', FontAwesomeIcon)
      .mixin({ methods: { route: window.route } });

    myApp.config.globalProperties.$DateTime = DateTime;
    myApp.config.globalProperties.$bNormalizer = boolNormalizer;

    myApp.mount(el);
    return myApp;
  },
});
