<template>
  <main-skeleton>
    <main-sidebar />
    <div class="grow bg-neutral">
      <slot />
    </div>
  </main-skeleton>
</template>

<script setup>
import MainSkeleton from './main-skeleton.vue';
import MainSidebar from '../components/sidebar/main-sidebar.vue';
</script>

<style></style>
