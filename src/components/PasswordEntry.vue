<template>
  <div class="input-container">
    <div class="text-container">
      <label class="input-label"> {{ labelName }} </label>
      <span class="helper">Forgot Password?</span>
    </div>
    <input type="password"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Entry from './Entry.vue';

@Component
export default class PasswordEntry extends Entry {
}
</script>


<style scoped lang="scss">

@import '../scss/_variables.scss';

.input-container {
  display: flex;
  flex-direction: column;
  width: $entry-width;
  height: 60px;
  margin: 2em 0;
}

.input-label {
  font-size: $regular-text;
  font-weight: 550;
  color: $almost-black-color;
  font-family: $font-family;
  text-align: left;
  width: $entry-width;
}

input {
  background-color: $light-gray-color;
  height: $entry-height;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  color: $almost-black-color;
  font-family: $font-family;
  padding: 10px;
}

.text-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.helper {
  color: $purple-color;
  font-family: $font-family;
  cursor: pointer;
}

@media only screen and (max-width: 1000px) {
  input {
    width: $entry-width / 1.5
  }

  .text-container {
    width: $entry-width / 1.5
  }
}

</style>
