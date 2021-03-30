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
        <div class="header">Register</div>
        <Entry labelName="Name" inputType="Text" />
        <Entry labelName="Username" inputType="Text" />
        <Entry labelName="Email" inputType="Email" />
        <Entry labelName="Password" inputType="Password" />

        <Checkbox />

        <EntryButton text="Create account" @btn-clicked="registerClicked()" />
        <div class="helper">
          <span>Already a member?</span>
          <span class="purple" @click="GoToLoginView()"> Sign in!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Entry from "@/components/Entry.vue";
import EntryButton from "@/components/EntryButton.vue";
import CallToActionFiller from "@/components/CallToActionFiller.vue";
import Checkbox from "@/components/Checkbox.vue";
import Logo from "@/components/Logo.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Login",
  components: {
    Entry,
    EntryButton,
    CallToActionFiller,
    Checkbox,
    Logo,
  },
  methods: {
    GoToLoginView(): void {
      this.$router.push("/login");
    },

    registerClicked(): void {
      this.$notify({
        group: "foo",
        title: "Welcome",
        text: "Account created successfully!",
      });
      this.$router.push("/newsfeed");
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