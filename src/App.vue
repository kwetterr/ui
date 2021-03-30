<template>
    <div class="">
      <router-view/>
      <notifications classes="my-style" group="foo" />
    </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
    components: {

    }  
})


</script>

<style lang="scss">
@import './scss/_variables.scss';

body {
  padding: 0;
  margin: 0;
  width: 100vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
        font-family: $font-family;
        font-size: $extra-large-text;
        color: $almost-black-color;
        font-weight: 550;
      }

.my-style {
  // Style of the notification itself
  border-left: 5px solid $pink-color;
  background: $pink-color;
  padding: 1em;
  font-family: $font-family;

  .notification-title {
    // Style for title line 
    font-size: $regular-text;
  }
 
  .notification-content {
    // Style for content
    font-size: $small-text;
  }
}

</style>
