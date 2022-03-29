<template>
  <main-layout>
    <div class="flex flex-col h-full">
      <div class="card bg-base-200 p-3 m-3">
        <span class="m-auto text-3xl">{{ $page.props.auth.user.username }}</span>
      </div>
      <div class="grow flex flex-col md:flex-row">
        <div class="w-full md:w-2/5 h-3/5 md:h-full p-3">
          <div class="h-full card bg-base-200">1</div>
        </div>
        <div class="w-full md:w-3/5 h-2/5 md:h-full flex flex-col p-3">
          <div class="grow card bg-base-200">2</div>
          <form @submit.prevent="logout">
            <button class="btn btn-block btn-error mt-3">Выйти из аккаунта</button>
          </form>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script setup>
import mainLayout from '../layouts/main-layout.vue';
import { useForm } from '@inertiajs/inertia-vue3';
const form = useForm();

const logout = () => {
  form.post(route('logout'));
};
</script>

<style></style>
