<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../../assets/Logo.png" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div v-if="loggedIn" class="navbar-start">
        <router-link :to="{ name: 'home' }" class="navbar-item">
          Newsfeed
        </router-link>
        <router-link :to="{ name: 'users' }" class="navbar-item">
          Users
        </router-link>
      </div>

      <div class="navbar-end">
        <div v-if="!loggedIn" class="navbar-item">
          <div class="buttons">
            <router-link :to="{ name: 'register' }" class="button is-link">
              <strong>Sign up</strong>
            </router-link>
            <router-link :to="{ name: 'login' }" class="button is-light">
              Log in
            </router-link>
          </div>
        </div>
        <div v-else class="navbar-item">
          <div class="buttons">
            <router-link :to="{ name: 'profile', params: { username: username } }" v-if="username" class="button is-transparant" >
              {{ username }}
            </router-link>
            <div class="button is-link" @click="logout()">
              <strong>Logout</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";

const Navbar = defineComponent({
  emits: ["logged-out"],
  props: {
    loggedIn: Boolean,
    username: String,
  },
  methods: {
    register() {},
    login() {},
    logout() {
      localStorage.removeItem("user");
      this.$emit("logged-out");
      router.push("/login");
    },
  }
});
export default Navbar;
</script>

<style lang="postcss" scoped>
</style>