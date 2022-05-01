<template>
  <Link :href="route(config.link) ?? '#'" class="btn btn-ghost p-1" :class="{ 'btn-disabled': route().current() == config.link }">
    <sidebar-item-content :config="config"></sidebar-item-content>
  </Link>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import SidebarItemContent from './sidebar-item-content.vue';

const props = defineProps({
  config: Object,
});
</script>

<style></style>
