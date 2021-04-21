<template>
  <div class="container">
    <div class="left">
      <call-to-action-filler />
    </div>

    <div class="right">
      <div class="logo-container">
        <Logo style="margin: 2em" />
      </div>
      <div class="content">
        <div class="header">Login</div>
        <Entry
          labelName="Username"
          inputType="Text"
          :initialValue="username"
          @input-changed="usernameChanged"
        />
        <PasswordEntry
          labelName="Password"
          inputType="Password"
          :initialValue="password"
          @input-changed="passwordChanged"
        />
        <EntryButton text="Login" @btn-clicked="loginClicked()" />
        <div class="helper">
          <span>Not a member?</span>
          <span class="purple" @click="GoToRegisterView()"> Sign up now!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Entry from "@/components/Entry.vue";
import EntryButton from "@/components/EntryButton.vue";
import PasswordEntry from "@/components/PasswordEntry.vue";
import CallToActionFiller from "@/components/CallToActionFiller.vue";
import Logo from "@/components/Logo.vue";

import Vue from "vue";
import UserService from "@/services/UserService";
import AuthorizeReq from "@/models/request/user/AuthorizeReq";
import User from "@/models/User";

export default Vue.extend({
  name: "Login",
  components: {
    Entry,
    PasswordEntry,
    EntryButton,
    CallToActionFiller,
    Logo,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    usernameChanged(val: string): void {
      this.username = val;
    },

    passwordChanged(val: string): void {
      this.password = val;
    },

    loginClicked() {
      var userService = new UserService();
      var authReq = new AuthorizeReq();
      authReq.username = this.username;
      authReq.password = this.password;

      userService.Authorize(authReq, (err: string, user: User) => {
        if (err) {
          if (err) {
            alert(err);
          }
        } else {
          this.$router.push("/newsfeed");
        }
      });
    },

    GoToRegisterView(): void {
      this.$router.push("/register");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.container {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: 100vh;
  width: 100vw;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
}

.left {
  flex: 0 0 50;
  width: 50%;
  background: rgb(221, 75, 143);
  background: linear-gradient(
    0deg,
    rgba(221, 75, 143, 1) 0%,
    rgba(79, 60, 201, 1) 100%
  );
  overflow: hidden;
  padding: 3em;
}

.right {
  flex: 0 0 50;
  width: 75%;
  display: flex;
  flex-direction: row;

  .content {
    width: 90%;
    padding: 5em;

    .header {
      font-family: $font-family;
      font-size: $extra-large-text;
      color: $almost-black-color;
      font-weight: 550;
    }

    .helper {
      font-family: $font-family;
      margin-top: 1em;

      .purple {
        color: $purple-color;
        cursor: pointer;
      }
    }
  }
}

/* Remove left flexbox if view width is too small */
@media only screen and (max-width: 1300px) {
  .left {
    display: none;
  }

  .right {
    width: 100%;
  }
}

@media only screen and (max-width: 700px) {
  .right {
    flex-direction: column;

    .content {
      padding: 2em;
    }
  }
}
</style>