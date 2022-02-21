<template>
  <button class="btn btn-ghost p-1">
    <sidebar-item-content :config="config"></sidebar-item-content>
  </button>
</template>

<script setup>
import SidebarItemContent from './sidebar-item-content.vue';

const props = defineProps({
  config: Object,
});
</script>

<style></style>
