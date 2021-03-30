<template>
  <div class="input-container">
    <input type="checkbox" id="box" name="box"/>
    <label class="input-text" for="box">
      Creating an account means you’re okay with our <span class="purple-bold">Terms of Service, Privacy Policy,</span> and our default <span class="purple-bold">Notification Settings.</span>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Checkbox extends Vue {
}
</script>

<style scoped lang="scss">
@import '../scss/_variables.scss';

.input-container {
  margin: 1em 0;
  display: flex;
  align-content: center;
}

.input-text {
  font-family: $font-family;

  .purple-bold {
    color: $purple-color;
    font-weight: 600;
    cursor: pointer;
  }
}


</style>
