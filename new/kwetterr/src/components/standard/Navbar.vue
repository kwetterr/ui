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
      <div class="navbar-start">
        <router-link :to="{ name: 'Home' }" class="navbar-item">
          Newsfeed  
        </router-link>
        <router-link :to="{ name: 'Home' }" class="navbar-item">
          Profile
        </router-link>
      </div>

      <div class="navbar-end">
        <figure class="image is-32x32">
          <img
            class="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </figure>
        <div class="navbar-item">
          <div class="buttons">
            <router-link :to="{ name: 'Register' }" class="button is-link">
              <strong>Sign up</strong>
            </router-link>
            <router-link :to="{ name: 'Login' }" class="button is-light">
              Log in
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const Navbar = defineComponent({
  methods: {
    register() {},
    login() {},
  },
});
export default Navbar;
</script>

<style lang="postcss" scoped>
</style>