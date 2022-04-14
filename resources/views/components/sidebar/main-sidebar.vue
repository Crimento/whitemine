<template>
  <div
    class="bg-neutral text-neutral-content main-sidebar flex flex-col overflow-hidden"
    :class="sidebarStatus ? 'sidebar-expanded' : 'sidebar-collapsed'"
  >
    <sidebar-link
      v-if="$page.props.auth.user"
      :config="{
        imgLink: $page.props.auth.user.skin_set
          ? '/storage/skins/' + $page.props.auth.user.username + '.head.png?' + Date.now()
          : '/storage/defaulthead.png',
        text: $page.props.auth.user.username,
        link: '/profile',
      }"
    />
    <sidebar-link
      v-else
      :config="{
        icon: 'circle-user',
        text: 'Регистрация/Вход',
        link: '/login',
      }"
    >
    </sidebar-link>
    <sidebar-divider></sidebar-divider>
    <sidebar-link
      :config="{
        icon: 'home',
        text: 'Домой',
        link: '/',
      }"
    />
    <sidebar-link
      :config="{
        icon: 'newspaper',
        text: 'Новости',
        link: '/news',
      }"
    />
    <div class="grow"></div>
    <sidebar-divider></sidebar-divider>
    <sidebar-button
      :config="{
        icon: this.$store.state.darkMode ? 'sun' : 'moon',
        text: 'Тёмный режим',
      }"
      @click="enableDarkMode"
    />
    <sidebar-divider></sidebar-divider>
    <sidebar-button
      :config="{
        icon: sidebarStatus ? 'chevron-left' : 'chevron-right',
        text: 'Свернуть',
      }"
      @click="forceClick"
    />
  </div>
</template>

<script>
import SidebarLink from './sidebar-link.vue';
import SidebarDivider from './sidebar-divider.vue';
import SidebarButton from './sidebar-button.vue';

export default {
  components: {
    SidebarLink,
    SidebarDivider,
    SidebarButton,
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    });
    this.$store.commit('forceSidebar', this.$bNormalizer(this.$cookie.getCookie('sidebar_status')) ?? null);
  },
  computed: {
    sidebarStatus() {
      return this.$store.getters.sidebarStatus;
    },
  },
  watch: {
    sidebarStatus(value) {},
  },
  methods: {
    onResize() {
      if (this.$store.state.sidebarForceOpened === null) {
        if (window.innerWidth > 960) {
          this.$store.commit('changeSidebar', true);
        } else {
          this.$store.commit('changeSidebar', false);
        }
      }
    },
    forceClick() {
      this.$cookie.setCookie('sidebar_status', !this.sidebarStatus);
      this.$store.commit('forceSidebar', !this.sidebarStatus);
    },
    enableDarkMode() {
      this.$store.commit('setDarkMode', !this.$store.state.darkMode);
    },
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style>
.main-sidebar {
  transition: width 0.5s ease, min-width 0.5s ease;
}
.sidebar-collapsed {
  width: 50px;
  min-width: 50px;
}
.sidebar-expanded {
  width: 400px;
  min-width: min(400px, calc(100vw));
}
</style>
