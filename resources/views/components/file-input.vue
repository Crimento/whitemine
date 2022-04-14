<template>
  <input type="file" name="file" class="input bg-base-300 w-full my-3" @change="onFileChange" />
</template>

<script>
export default {
  methods: {
    onFileChange(event) {
      this.$emit('update:modelValue', event.target.files[0]);
    },
  },
};
</script>

<style scoped>
input[type='file']::-webkit-file-upload-button,
input[type='file']::file-selector-button {
  @apply btn text-xs;
  margin-inline-start: -1rem;
  margin-inline-end: 1rem;
}
</style>
