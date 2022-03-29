<template>
  <main-layout>
    <form-template :header="'Вход в систему'">
      <form-errors :form="form"></form-errors>
      <label class="label">
        <span class="label-text">Логин</span>
      </label>
      <form @submit.prevent="submit">
        <input
          v-model="form.username"
          type="text"
          placeholder="Логин"
          class="input input-bordered w-full mb-3"
          required
          autofocus
          autocomplete="username"
        />
        <label class="label">
          <span class="label-text">Пароль</span>
        </label>
        <input v-model="form.password" type="password" placeholder="Пароль" class="input input-bordered w-full mb-3" required autofocus />
        <div class="card-actions my-3">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Link :href="route('register')" class="btn btn-block btn-success">Регистрация</Link>
            <button :class="{ 'loading btn-disabled opacity-25': form.processing }" class="btn btn-block btn-info" type="submit">Войти</button>
          </div>
        </div>
      </form>
    </form-template>
  </main-layout>
</template>

<script setup>
import MainLayout from '../../layouts/main-layout.vue';
import FormTemplate from '../../components/auth/form-template.vue';
import FormErrors from '../../components/auth/form-errors.vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
  canResetPassword: Boolean,
  status: String,
});

const form = useForm({
  username: null,
  password: null,
  remember: false,
});

const submit = () => {
  form.clearErrors();
  form.post(route('login'));
};
</script>

<style lang="scss" scoped></style>
