<template>
  <div v-if="Object.keys(form.errors).length !== 0" class="alert alert-error shadow-lg">
    <ul class="list-disc">
      <li v-for="error in form.errors" class="mx-3">{{ error }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  form: Object,
});
</script>

<style lang="scss" scoped></style>
