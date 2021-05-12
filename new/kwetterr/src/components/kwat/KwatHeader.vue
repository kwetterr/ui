<template>
  <ul class="kwat-header is-text-grey-light">
    <li class="title">{{ username }}</li>
    <li class="title">•</li>
    <li class="title">{{ username_tag }}</li>
    <li class="title">•</li>
    <li class="title">{{ time_since }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const Input = defineComponent({
  props: {
    username: {
      type: String,
      value: ""
    },
    username_tag: {
      type: String,
      value: ""
    },
    time_since: {
      type: String,
      value: ""
    },
  },
});
export default Input;
</script>

<style lang="scss" scoped>
.kwat-header {
  display: flex;
  justify-content: space-between;

  .title {
    font-size: 16px;
    color: rgb(36, 36, 36);
  }
}
</style>