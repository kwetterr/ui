<template>
<div class="field">
  <p class="control has-icons-left has-icons-right ">
    <input class="input" type="email" placeholder="Type a name">
    <span class="icon is-small is-right">
      <i class="fas fa-search"></i>
    </span>
  </p>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const Input = defineComponent({});
export default Input;

</script>

<style lang="scss" scoped>
.field {
  max-width: 400px;
}
</style>