<template>
  <div class="container form">
    <h1 class="title">Login</h1>
    <div class="form-control">
      <div class="field">
        <label class="label">Email</label>
        <p class="control has-icons-left has-icons-right">
          <input v-model="loginModel.email" class="input" type="email" placeholder="Email" />
        </p>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <p class="control has-icons-left has-icons-right">
          <input v-model="loginModel.password" class="input" type="password" placeholder="Password" />
        </p>
      </div>

      <Btn :text="submit" @click="login()" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Btn from "@/components/standard/Btn.vue";
import { LoginModel } from "@/types/req/LoginModel";

const Login = defineComponent({
  components: {
    Btn,
  },
  data() {
    return {
      submit: "Login",
      loginModel: {
        email: "",
        password: "",
      } as LoginModel,
    };
  },
  methods: {
    login(): void {
      alert(`email: ${this.loginModel.email}, password: ${this.loginModel.password}`);
    },
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