<template>
  <div class="h-screen max-h-screen flex">
    <slot />
  </div>
</template>

<script>
function boolNormalizer(bool) {
  if (bool === 'true') {
    return true;
  }
  if (bool === 'false') {
    return false;
  }
  return null;
}
function darkModeClassAdder(bool) {
  if (bool) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export default {
  mounted() {
    this.$store.commit(
      'setDarkMode',
      boolNormalizer(this.$cookie.getCookie('dark_mode')) ?? true
    );
    darkModeClassAdder(this.$store.state.darkMode);
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
  watch: {
    darkMode(value) {
      this.$cookie.setCookie('dark_mode', value);
      darkModeClassAdder(value);
    },
  },
};
// import { useCookies } from 'vue3-cookies';

// function Normalizer(bool) {
//   if (bool === 'true') {
//     return true;
//   }
//   if (bool === 'false') {
//     return false;
//   }
// }

// export default {
//   setup() {
//     const { cookies } = useCookies();
//     return { cookies };
//   },
//   mounted() {
//     this.$store.commit('setDarkMode', Normalizer(this.cookies.get('dark_mode'))) ?? true;
//   },
//   computed: {
//     darkMode() {
//       return this.$store.state.darkMode;
//     },
//   },
//   watch: {
//     darkMode(value) {
//       if (this.darkMode == true) {
//         document.documentElement.classList.add('dark');
//       } else {
//         document.documentElement.classList.remove('dark');
//       }
//       this.$store.commit('setDarkMode', value);
//       this.cookies.set('dark_mode', value);
//     },
//   },
// };
</script>

<style></style>
