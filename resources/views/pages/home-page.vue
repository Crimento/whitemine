<template>
  <main-layout>
    <div class="hero min-h-screen bg-base-100">
      <div class="text-center hero-content">
        <div class="flex flex-col">
          <h1 class="text-3xl md:text-5xl font-bold">Мой сервер</h1>
          <p class="m-3">Майнкрафт это моя жизнь!</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <Link :href="route('register')" class="btn btn-block btn-success">Регистрация</Link>
            <button class="btn btn-primary">Скачать .jar</button>
            <button class="btn btn-primary">Скачать .exe (x64)</button>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import mainLayout from '../layouts/main-layout.vue';
import { Link } from '@inertiajs/inertia-vue3';
export default {
  components: {
    mainLayout,
    Link
  },
};
</script>

<style></style>
