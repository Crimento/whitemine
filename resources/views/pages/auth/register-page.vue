<template>
  <main-layout>
    <form-template :header="'Регистрация'">
      <form-errors :form="form"></form-errors>

      <form @submit.prevent="submit">
        <label class="label">
          <span class="label-text">Логин</span>
        </label>
        <input v-model="form.username" type="text" class="input input-bordered w-full mb-3" required autofocus autocomplete="username" />

        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input v-model="form.email" type="email" class="input input-bordered w-full mb-3" required autofocus autocomplete="email" />

        <label class="label">
          <span class="label-text">Пароль</span>
        </label>
        <input v-model="form.password" type="password" class="input input-bordered w-full mb-3" required autofocus />

        <label class="label">
          <span class="label-text">Подтверждение пароля</span>
        </label>
        <input v-model="form.password_confirmation" type="password" class="input input-bordered w-full mb-3" required autofocus />

        <div class="card-actions my-3">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Link :href="route('login')" class="btn btn-block btn-info">Войти?</Link>
            <button :class="{ 'loading btn-disabled opacity-25': form.processing }" class="btn btn-block btn-success" type="submit">
              Зарегистрироваться
            </button>
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
  password_confirmation: null,
  email: null,
});

const submit = () => {
  form.clearErrors();
  form.post(route('register'));
};
</script>

<style lang="scss" scoped></style>
