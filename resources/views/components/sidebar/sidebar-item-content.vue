<template>
  <div class="h-full w-full flex flex-row-reverse items-center justify-center">
    <span v-if="sidebarStatus" class="text-right grow mx-3">{{
      config.text ?? 'Placeholder'
    }}</span>
    <img
      v-if="config.imgLink != null"
      style="width: 50px"
      class="rounded-lg py-1"
      :class="config.sidebarStatus ? 'p-1' : ''"
      src="http://pm1.narvii.com/7616/bc3b22a89815985dc74b830a01ad331c0d3e9f86r1-768-768v2_uhq.jpg"
      alt=""
    />
    <font-awesome-icon
      v-else
      :class="sidebarStatus ? 'p-3' : ''"
      size="2x"
      :icon="['fas', config.icon ?? 'circle-question']"
    />
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
let sidebarStatus = computed(() => store.getters.sidebarStatus);

const props = defineProps({
  config: {
    type: Object,
    default() {
      return {
        link: '#',
        imgLink: null,
        icon: 'circle-question',
        text: 'Placeholder',
      };
    },
  },
});
</script>

<style lang="scss" scoped></style>
