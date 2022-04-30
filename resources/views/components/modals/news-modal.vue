<template>
  <input type="checkbox" id="news-modal" class="modal-toggle" :checked="isVisible" />
  <div class="modal">
    <div class="modal-box bg-base-200">
      <form-errors :form="form"></form-errors>
      <form @submit.prevent="submit">
        <input type="text" placeholder="Заголовок" class="input input-bordered w-full mb-3" v-model="form.header" />
        <textarea class="textarea textarea-bordered w-full mb-3" placeholder="Текст новости" v-model="form.content"></textarea>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <button class="btn btn-block" @click="closeModal">Закрыть</button>
          <button
            :class="{
              'loading btn-disabled opacity-25': form.processing,
              'btn-error': form.mode == 'delete',
              'btn-success': form.mode == 'create',
              'btn-info': form.mode == 'update',
            }"
            class="btn btn-block"
            type="submit"
          >
            <v-switch :case="form.mode">
              <template #delete>Удалить</template>
              <template #create>Создать</template>
              <template #update>Сохранить</template>
            </v-switch>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import FormErrors from '../auth/form-errors.vue';
const props = defineProps({
  config: {
    type: Object,
    default: {
      mode: null,
      id: null,
      header: 'Testing header',
      content: 'This is test of the news!',
      user_id: null,
    },
  },
});
let isVisible = ref(false);
const form = useForm({
  mode: '',
  news_id: null,
  header: '',
  content: '',
  user_id: null,
});
watch(props.config, () => {
  form.clearErrors();
  isVisible.value = true;
  form.mode = props.config.mode;
  form.news_id = props.config.news_id;
  form.header = props.config.header;
  form.content = props.config.content;
  form.user_id = props.config.user_id;
});
const closeModal = () => {
  isVisible.value = false;
};
const submit = () => {
  form.clearErrors();
  form.post(route('news.' + form.mode), {
    onSuccess: () => {
      closeModal();
    },
  });
};
</script>

<style scoped></style>
