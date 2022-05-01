<template>
  <main-layout> 
      <div class="h-full p-3">
          <div class="card p-3 h-full bg-base-200 text-center">
              <h1 class="text-3xl mb-3">Ссылки на загрузку</h1>
              <a href="https://javadl.oracle.com/webapps/download/AutoDL?BundleId=246265_165374ff4ea84ef0bbd821706e29b123" class="m-3 link link-primary text-xl">1. Java 8 x64 (для Windows)</a>
              <a href="/launcher/Blackmine.exe" class="m-3 link link-primary text-xl">2. Лаунчер .exe (Windows x64)</a>
              <p>Windows Smartscreen будет жаловаться на неподписанный файл, но я не собираюсь тратить сотни евро на сертификат только, чтобы успокоить тупой кусок операционки.</p>
              <a href="/launcher/Blackmine.jar" class="m-3 link link-primary text-xl">2. Лаунчер .jar (Мультиплатформа)</a>
          </div>
      </div>
  </main-layout>
</template>

<script setup>
import mainLayout from '../layouts/main-layout.vue';
</script>

<style></style>
