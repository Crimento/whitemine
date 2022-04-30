<template>
  <main-layout>
    <div class="flex flex-col h-full">
      <div class="p-3">
        <button class="btn btn-block btn-info" @click="createNews()">Добавить новость</button>
      </div>
      <div v-for="n in attrs.news.data" :key="n.id" class="card mx-3 mb-1 p-3 bg-base-200">
        <div class="flex items-center">
          <div class="mr-auto">{{ n.header }}</div>
          <div>{{ $DateTime.fromISO(n.created_at).toLocaleString($DateTime.DATETIME_SHORT) }}</div>
          <div class="mx-3 text-accent-content">{{ n.user.username }}</div>
          <button class="btn btn-square btn-sm btn-info mx-1" @click="editNews(n.id, n.header, n.content, n.user_id)">
            <font-awesome-icon icon="pen-to-square" />
          </button>
          <button class="btn btn-square btn-sm btn-error mx-1" @click="deleteNews(n.id, n.header, n.content)">
            <font-awesome-icon icon="times" />
          </button>
        </div>
      </div>
      <div class="mt-auto">
        <v-pagination :links="attrs.news.links"></v-pagination>
      </div>
    </div>
    <news-modal :config="newsModalData"></news-modal>
  </main-layout>
</template>

<script setup>
import { reactive, useAttrs, watch } from 'vue';
import mainLayout from '../../layouts/main-layout.vue';
import NewsModal from '../../components/modals/news-modal.vue';
import VPagination from '../../components/v-pagination.vue';

const attrs = useAttrs();
const newsModalData = reactive({
  trigger: null,
  mode: null,
  news_id: null,
  header: null,
  content: null,
  user_id: null,
});
const createNews = () => {
  //trigger the watcher in modal every single time
  newsModalData.trigger = Date.now();
  newsModalData.mode = 'create';
  newsModalData.news_id = null;
  newsModalData.header = null;
  newsModalData.content = null;
  newsModalData.user_id = attrs.auth.user.id;
};
const editNews = (news_id, header, content, user_id) => {
  newsModalData.trigger = Date.now();
  newsModalData.mode = 'update';
  newsModalData.news_id = news_id;
  newsModalData.header = header;
  newsModalData.content = content;
  newsModalData.user_id = user_id;
};
const deleteNews = (news_id, header, content) => {
  newsModalData.trigger = Date.now();
  newsModalData.mode = 'delete';
  newsModalData.news_id = news_id;
  newsModalData.header = header;
  newsModalData.content = content;
  newsModalData.user_id = null;
};
</script>

<style></style>
