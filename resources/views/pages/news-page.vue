<template>
  <main-layout>
    <div class="card bg-base-100 m-3">
      <div class="card-body">
        <h2 class="card-title text-primary">Temp header</h2>
        <p class="indent-8">Pseudo text</p>
        <div class="card-actions">
          <span class="ml-auto">date</span>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import mainLayout from '../layouts/main-layout.vue';
export default {
  components: {
    mainLayout,
  },
};
</script>

<style></style>
