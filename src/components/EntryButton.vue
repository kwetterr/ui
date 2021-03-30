<template>
  <div class="btn" @click="onClick()">
    <span> {{ text }} </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from './Button.vue';

@Component
export default class EntryButton extends Button {
  onClick() : void {
      this.$emit('btn-clicked')
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_variables.scss';

.input-label {
  font-size: $regular-text;
  font-weight: 550;
  color: $almost-black-color;
  font-family: $font-family;
  text-align: left;
}

.btn {
  display: flex;
  justify-content: center;
  width: $entry-width;
  height: $entry-height;
  background-color: $pink-color;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  span {
    justify-self: center;
    align-self: center;
    font-family: 'Helvetica Neue', Helvetica -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif, sans-serif;
    font-size: $regular-text;
    color: $white-color;
    font-weight: 550;
  }
}

@media only screen and (max-width: 1000px) {
  .btn {
    width: $entry-width / 1.5
  }

  .input-label {
    width: $entry-width / 1.5
  }
}

</style>
