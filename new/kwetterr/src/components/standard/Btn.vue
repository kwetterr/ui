<template>
  <button class="button is-link">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const Btn = defineComponent({
  props: {
    text: String,
  }
});
export default Btn;

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