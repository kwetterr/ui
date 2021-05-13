<template>
  <div class="container form">
    <h1 class="title">Register</h1>
    <div class="form-control">
      <div class="field">
        <label class="label">Name</label>
        <p class="control has-icons-left has-icons-right">
          <input
            v-model="registerModel.name"
            class="input"
            type="text"
            placeholder="Bob Balls"
          />
        </p>
      </div>

      <div class="field">
        <label class="label">Username</label>
        <p class="control has-icons-left has-icons-right">
          <input
            v-model="registerModel.username"
            class="input"
            type="text"
            placeholder="Bob123"
          />
        </p>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <p class="control has-icons-left has-icons-right">
          <input
            v-model="registerModel.email"
            class="input"
            type="email"
            placeholder="Bob@email.com"
          />
        </p>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <p class="control has-icons-left has-icons-right">
          <input
            v-model="registerModel.password"
            class="input"
            type="password"
            placeholder="Password"
          />
        </p>
      </div>

      <div class="field">
        <label class="label">Biography</label>
        <p class="control has-icons-left has-icons-right">
          <input
            v-model="registerModel.biography"
            class="input"
            type="text"
            placeholder="I like to talk about dogs and such! :)"
          />
        </p>
      </div>

      <div class="field">
        <label class="label">Profile picture</label>
        <img class="avatar-img" :src="registerModel.avatar" />

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
      <div class="field"></div>

      <Btn :text="submit" @click="register()" />
      <div v-if="errorMessage" class="subtitle has-text-danger">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";
import { userService } from "@/services/UserService";

import { RegisterModel } from "@/types/user/RegisterModel";
//import { UserModel } from "@/types/user/UserModel";

import Btn from "@/components/standard/Btn.vue";
import { AxiosError } from "axios";

const Register = defineComponent({
  components: {
    Btn,
  },
  data() {
    return {
      submit: "Register",
      errorMessage: "",
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
      userService
        .register(this.registerModel)
        .then(() => {
          alert("success");
          router.push("/");
        })
        .catch((err: AxiosError) => {
          this.errorMessage = err.message;
        });
    },
    async fileChanged(event: Event): Promise<void> {
      if (event && event.target) {
        const el = event.target as HTMLInputElement;
        const files = el?.files;
        if (files) {
          const file = files[0];
          this.fileName = file.name;
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.registerModel.avatar = reader.result as string;
          };
        }
      }
    },
  },
});

export default Register;
</script>

<style lang="postcss" scoped>
.avatar-img {
  width: 100px;
}
</style>