<template>
  <main-layout>
    <div class="flex flex-col min-h-full">
      <news-item v-for="n in attrs.news.data" :news="n"></news-item>
      <v-pagination :links="attrs.news.links"></v-pagination>
    </div>
  </main-layout>
</template>

<script setup>
import { useAttrs } from 'vue';
import mainLayout from '../layouts/main-layout.vue';
import vPagination from '../components/v-pagination.vue';
import newsItem from '../components/news/news-item.vue';
import NewsItem from '../components/news/news-item.vue';
const attrs = useAttrs();
</script>

<style></style>
