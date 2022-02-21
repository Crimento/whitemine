import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      sidebarStatus: null,
      sidebarForceOpened: null,
      darkMode: true,
    };
  },
  mutations: {
    forceSidebar(state, sidebarStatus) {
      state.sidebarForceOpened = sidebarStatus;
    },
    changeSidebar(state, sidebarStatus) {
      state.sidebarStatus = sidebarStatus;
    },
    setDarkMode(state, darkModeStatus) {
      state.darkMode = darkModeStatus;
    },
  },
  getters: {
    sidebarStatus(state) {
      if (state.sidebarForceOpened === null) {
        return state.sidebarStatus;
      } else {
        return state.sidebarForceOpened;
      }
    },
  },
});

export { store };
