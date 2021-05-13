<template>
  <div class="container form">
    <h1 class="title">Register</h1>
    <div class="form-control">
      <div class="field">
        <label class="label">Name</label>
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="Bob Balls" />
        </p>
      </div>

      <div class="field">
        <label class="label">Username</label>
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="password" placeholder="Bob123" />
        </p>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Bob@email.com" />
        </p>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="password" placeholder="Password" />
        </p>
      </div>

      <div class="field">
        <label class="label">Biography</label>
        <p class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="password"
            placeholder="I like to talk about dogs and such! :)"
          />
        </p>
      </div>

      <div class="field">
        <label class="label">Profile picture</label>

        <div class="file has-name">
          <label class="file-label">
            <input
              @change="fileChanged"
              class="file-input"
              type="file"
              name="resume"
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label"> Choose a file… </span>
            </span>
            <span class="file-name">
              {{ fileName }}
            </span>
          </label>
        </div>
      </div>

      <Btn :text="submit" @click="register()" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";

import { RegisterModel } from "@/types/user/RegisterModel";

import Btn from "@/components/standard/Btn.vue";

const Register = defineComponent({
  components: {
    Btn,
  },
  data() {
    return {
      submit: "Register",
      fileName: "",
      registerModel: {
        name: "",
        username: "",
        email: "",
        country: "NL",
        biography: "",
        avatar: "",
      } as RegisterModel,
    };
  },
  methods: {
    register(): void {
      alert("registered!");
      router.push("/");
    },
    fileChanged(event: Event): void {
      if (event && event.target) {
        const el = event.target as HTMLInputElement;
        const files = el?.files;
        if (files) {
          const file = files[0];
          this.fileName = file.name;
        }
      }
    },
  },
});

export default Register;
</script>

<style lang="postcss" scoped>
.table-section {
  margin-left: 5%;
  margin-top: 5%;
}

.form {
  margin: 50px 15% 0 15%;
}
</style>