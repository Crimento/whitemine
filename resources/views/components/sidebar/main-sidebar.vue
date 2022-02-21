<template>
  <div
    class="bg-primary main-sidebar flex flex-col overflow-hidden"
    :class="sidebarStatus ? 'sidebar-expanded' : 'sidebar-collapsed'"
  >
    <sidebar-link
      v-if="$page.props.auth.user"
      :config="{
        icon: 'circle-user',
        text: '',
        link: '/',
      }"
    />
    <sidebar-link
      v-else
      :config="{
        icon: 'circle-user',
        text: 'Регистрация/Вход',
        link: '/',
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
  },
  computed: {
    sidebarStatus() {
      return this.$store.getters.sidebarStatus;
    },
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
  transition: width 0.75s;
}
.sidebar-collapsed {
  width: 50px;
}
.sidebar-expanded {
  width: 400px;
}
</style>
