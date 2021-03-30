<template>
  <div class="search-input-container">
    <input class="searchbar" type="text" placeholder="Search..." />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Searchbar extends Vue {
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_variables.scss';

.search-input-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.searchbar {
  margin: 0;
  width: 100%;
  height: 100%;
  @apply py-2 px-4 bg-gray-100 text-gray-900 text-lg font-semibold rounded-md shadow-md hover:bg-gray-100 focus:outline-none
}

.searchbar:focus {
  // outline-color: $pink-color;
}

</style>
