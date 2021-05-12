<template>
    <navbar @loggedOut="loggedIn = false" />

    <router-view v-if="loggedIn"/>
    <router-view v-else>
      <Login />
    </router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Login from '@/views/Login.vue';
import Navbar from '@/components/standard/Navbar.vue';
import Admin from '@/views/Admin.vue';

@Options({
  components: {
    Admin,
    Navbar,
    Login
  },
  data() {
    return {
      loggedIn: false
    }
  },
  created() {
    let id = localStorage.getItem("userId");
    if(id) {
      this.loggedIn = true;
    }
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@charset "utf-8";

$link: #4A42C1;

@import "../node_modules/bulma/bulma.sass";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

</style>
