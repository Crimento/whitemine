<template>
  <div class="h-screen flex justify-center items-center">
    <div class="card w-full md:w-128 bg-base-300 shadow-xl m-3">
      <div class="card-body">
        <h2 class="card-title mx-auto mb-3">{{ header }}</h2>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: 'Header',
    },
  },
};
</script>

<style lang="scss" scoped></style>
