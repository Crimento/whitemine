<template>
  <div class="h-screen max-h-screen flex">
    <slot />
  </div>
</template>

<script>
//dark mode handled here
function darkModeClassAdder(bool) {
  if (bool) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

export default {
  mounted() {
    this.$store.commit('setDarkMode', this.$bNormalizer(this.$cookie.getCookie('dark_mode')) ?? true);
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
</script>

<style></style>
