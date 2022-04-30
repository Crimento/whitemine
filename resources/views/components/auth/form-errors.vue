<template>
  <div v-if="Object.keys(form.errors).length !== 0" class="alert alert-error shadow-lg mb-3">
    <ul class="flex flex-col w-full list-disc px-3">
      <li v-for="error in form.errors" class="justify-self-center w-full">{{ error }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  form: Object,
});
</script>

<style lang="scss" scoped></style>
