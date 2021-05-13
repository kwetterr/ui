<template>
  <navbar @loggedOut="loggedIn = false" :loggedIn="loggedIn" :username="username" />
  <router-view @credentialsChanged="validateUser()" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/standard/Navbar.vue";
import Admin from "@/views/Admin.vue";
import { UserModel } from "./types/user/UserModel";

@Options({
  components: {
    Admin,
    Navbar,
  },
  data() {
    return {
      loggedIn: false,
      username: "",
    };
  },
  created() {
    this.validateUser();
  },
  methods: {
    validateUser() {
      let user = localStorage.getItem("user");
      if (user) {
        this.loggedIn = true;
        let userModel: UserModel = JSON.parse(user);
        this.username = userModel.username;
      } else {
        this.loggedIn = false;
        this.username = "";
      }
    },
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@charset "utf-8";

$link: #4a42c1;

@import "../node_modules/bulma/bulma.sass";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
</style>
