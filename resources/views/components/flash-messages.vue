<template>
  <div v-if="visible" class="p-3 flex">
    <div class="grow">
      <div v-for="msg in messages" class="alert shadow-lg" :class="msg.class">
        <div class="flex w-full">
          <font-awesome-icon :icon="['fas', msg.icon]" />
          <span>{{ msg.text }}</span>
        </div>
      </div>
    </div>
    <button class="btn btn-square btn-ghost ml-auto" @click="closeAlert">
      <font-awesome-icon :icon="['fas', 'times']" />
    </button>
  </div>
</template>

<script>
function msgTypeToIcon(type) {
  switch (type) {
    case 'success':
      return 'circle-check';
    case 'error':
      return 'triangle-exclamation';
    case 'info':
      return 'circle-info';
    default:
      return 'circle-question';
  }
}

export default {
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    messages() {
      let messages = [];
      for (const [key, value] of Object.entries(this.$page.props.flash)) {
        if (value != null) {
          messages.push({
            type: key,
            class: 'alert-' + key,
            text: value,
            icon: msgTypeToIcon(key),
          });
        }
      }
      return messages;
    },
  },
  watch: {
    'messages.length': {
      handler(value) {
        if (value > 0) {
          this.visible = true;
        }
      },
      immediate: true,
    },
  },
  methods: {
    closeAlert() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
