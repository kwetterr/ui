<template>
  <form class="container form" @submit.prevent="preventDefault">
    <h1 class="title">Login</h1>
    <div class="form-control">
      <div class="field">
        <label class="label">Username</label>
        <p class="control has-icons-left has-icons-right">
          <input
            v-model="loginModel.username"
            class="input"
            type="text"
            placeholder="Username"
          />
        </p>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <p class="control has-icons-left has-icons-right">
          <input
            v-model="loginModel.password"
            current-password
            class="input"
            type="password"
            placeholder="Password"
          />
        </p>
      </div>

      <div v-if="error_message" class="subtitle has-text-danger">
        {{ error_message }}
      </div>

      <Btn :text="submit" @click="login()" />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";

import { userService } from "@/services/UserService";
import { LoginModel } from "@/types/user/LoginModel";

import Btn from "@/components/standard/Btn.vue";
import { UserModel } from "@/types/user/UserModel";

const Login = defineComponent({
  components: {
    Btn,
  },
  emits: ["credentials-changed"],
  data() {
    return {
      submit: "Login",
      error_message: "",
      loginModel: {
        username: "",
        password: "",
      } as LoginModel,
    };
  },
  methods: {
    login(): void {
      console.log("trying login");
      userService
        .login(this.loginModel)
        .then((user: UserModel) => {
          localStorage.setItem("user", JSON.stringify(user));
          this.$emit("credentials-changed");
          router.push("/");
          console.log("user", user);
          this.error_message = "";
        })
        .catch((msg: string) => {
          this.error_message = msg.toString();
          console.log("msg", msg);
        });
    },
  },
  preventDefault(event: Event) {
    event.preventDefault();
  },
});
export default Login;
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