<template>
<div class="container">
  <Navbar :isNewsFeed="false"/>
  <div class="header">Profile</div>
</div>
</template>

<script lang="ts">
// @ is an alias to /src

import Vue from 'vue'
import Navbar from '@/components/Navbar.vue';

export default Vue.extend({
  name: 'Profile',
  components: {
    Navbar
  },
  methods: {
  }
})

</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

</style>