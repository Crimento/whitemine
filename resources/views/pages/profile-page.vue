<template>
  <main-layout>
    <div class="flex flex-col h-full">
      <div class="card bg-base-300 p-1 md:p-3 m-3">
        <span class="m-auto text-3xl">{{ $page.props.auth.user.username }}</span>
      </div>
      <div class="grow flex flex-col overflow-scroll md:flex-row">
        <div class="w-full md:w-2/5 md:h-full p-3">
          <div class="h-full flex flex-col">
            <div class="card bg-base-300 p-5">
              <img
                :src="
                  $page.props.auth.user.skin_set
                    ? '/storage/skins/' + $page.props.auth.user.username + '.preview.png?' + $page.props.auth.user.username
                    : '/storage/defaultpreview.png'
                "
                alt=""
              />
            </div>
            <div class="md:grow"></div>
            <form @submit.prevent="uploadSkin">
              <form-errors :form="skinForm"></form-errors>
              <file-input v-model="skinForm.skin"></file-input>
              <button :class="{ 'loading btn-disabled opacity-25': skinForm.processing }" class="btn btn-block btn-info" type="submit">
                Загрузить скин
              </button>
            </form>
          </div>
        </div>
        <div class="w-full md:w-3/5 md:h-full flex flex-col p-3">
          <div class="bg-base-300 stats stats-vertical text-center lg:stats-horizontal shadow">
            <div class="stat">
              <div class="stat-title">ID</div>
              <div class="stat-value">{{ $page.props.auth.user.id }}</div>
            </div>

            <div class="stat">
              <div class="stat-title">Дата регистрации</div>
              <div class="stat-value">{{ $DateTime.fromISO($page.props.auth.user.created_at).toLocaleString() }}</div>
            </div>

            <div class="stat">
              <div class="stat-title">Дней на сервере</div>
              <div class="stat-value">{{ Math.round($DateTime.now().diff($DateTime.fromISO($page.props.auth.user.created_at)).as('days')) }}</div>
            </div>
          </div>
          <div class="grow"></div>
          <form @submit.prevent="logout">
            <button class="btn btn-block btn-error mt-3">Выйти</button>
          </form>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script setup>
import mainLayout from '../layouts/main-layout.vue';
import { useForm } from '@inertiajs/inertia-vue3';
import fileInput from '../components/file-input.vue';
import FormErrors from '../components/auth/form-errors.vue';

const skinForm = useForm({
  skin: null,
});
const logoutForm = useForm();

const logout = () => {
  logoutForm.post(route('logout'));
};

const uploadSkin = () => {
  skinForm.post(route('skinupload'));
};
</script>

<style></style>
