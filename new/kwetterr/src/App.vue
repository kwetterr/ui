<template>
    <navbar/>
    <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navbar from '@/components/standard/Navbar.vue';
import Admin from '@/views/Admin.vue';

@Options({
  components: {
    Admin,
    Navbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@charset "utf-8";

$link: #4A42C1;

@import "../node_modules/bulma/bulma.sass";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";


</style>
