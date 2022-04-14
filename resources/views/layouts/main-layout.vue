<template>
  <main-skeleton>
    <main-sidebar />
    <div class="grow bg-base-100">
      <div class="flex flex-col h-full">
        <flash-messages></flash-messages>
        <div class="grow overflow-scroll">
          <slot />
        </div>
      </div>
    </div>
  </main-skeleton>
</template>

<script setup>
import MainSkeleton from './main-skeleton.vue';
import MainSidebar from '../components/sidebar/main-sidebar.vue';
import FlashMessages from '../components/flash-messages.vue';
</script>

<style></style>
