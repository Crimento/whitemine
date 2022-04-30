<template>
  <div class="mx-3 mt-auto" v-if="links.length > 3">
    <div class="flex card bg-base-200 p-3">
      <div class="flex flex-nowrap mx-auto">
        <Link
          v-for="(link, key) in links"
          class="btn mx-1"
          :class="link.active ? 'btn-primary' : 'btn-neutral'"
          :href="link.url"
          v-html="link.label"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3';
const props = defineProps({
  links: Array,
});
</script>

<style lang="scss" scoped></style>
