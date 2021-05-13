<template>
<div class="field">
  <p class="control has-icons-left has-icons-right ">
    <input v-model="value" class="input" type="email" placeholder="Type a name" >
    <span class="icon is-small is-right">
      <i class="fas fa-search"/>
    </span>
  </p>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const Input = defineComponent({
  emits: [
    "value-changed"
  ],
  data() {
    return {
      value: ""
    }
  },
  watch: {
    value(newValue) {
      this.$emit("value-changed", newValue);
    }
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