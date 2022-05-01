<template>
  <main-layout>
    <div class="hero h-full minecraft-bg">
      <div class="text-center hero-content bg-base-300 opacity-90 card">
        <div class="flex flex-col p-3">
          <img
            class="animate__animated animate__pulse animate__slower animate__infinite"
            :src="darkMode ? '/images/blackmine_title_white.svg' : '/images/blackmine_title.svg'"
            alt=""
          />
          <p class="mb-3">Майнкрафт это моя жизнь!</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <Link :href="route('profile')" class="btn btn-block btn-success">
              <font-awesome-icon class="pr-3" size="2x" :icon="['fas', 'circle-user']" />
              Личный кабинет
            </Link>
            <a href="https://discord.gg/rHaPnQ7" target="_blank" rel="noopener noreferrer" class="btn btn-info">
              <font-awesome-icon class="pr-3" size="2x" :icon="['fab', 'discord']" />
              Discord
            </a>
            <Link :href="route('download')" class="btn btn-block btn-primary">
              <font-awesome-icon class="pr-3" size="2x" :icon="['fas', 'download']" />
              Скачать
            </Link>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script setup>
import mainLayout from '../layouts/main-layout.vue';
import { Link } from '@inertiajs/inertia-vue3';
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore();
const darkMode = computed(() => {
  return store.state.darkMode;
});
</script>

<style>
.minecraft-bg {
  background-image: url('/images/bg.png');
}
</style>
