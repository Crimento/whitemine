<template>
  <div class="card bg-base-200 mx-3 mt-3">
    <div class="card-body p-6">
      <h2 class="card-title text-primary">{{ news.header }}</h2>
      <p class="indent-8 text-accent-content">{{ !fullVisible && cutted ? cutContent : news.content }}</p>
      <button v-if="cutted && !fullVisible" class="btn btn-ghost btn-xs" @click="fullVisible = true">Читать далее</button>
      <div class="card-actions">
        <span class="text-sm">{{ news.user.username }}</span>
        <span class="ml-auto text-sm">{{ $DateTime.fromISO(news.created_at).toLocaleString($DateTime.DATETIME_SHORT) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  news: Object,
});
const fullVisible = ref(false);
const cutted = computed(() => {
  return props.news.content.length <= 500 ? false : true;
});
const cutContent = computed(() => {
  return props.news.content.slice(0, 500) + '...';
});
</script>

<style lang="scss" scoped></style>
