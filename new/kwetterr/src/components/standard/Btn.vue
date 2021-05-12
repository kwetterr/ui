<template>
  <button class="button is-link">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const Input = defineComponent({
  props: {
    text: String,
  }
});
export default Input;

</script>

<style lang="scss" scoped>
.field {
  max-width: 400px;
}

.icon {
  cursor: pointer;

  &:hover {
    cursor: pointer;
    color: red;
  }
}

</style>