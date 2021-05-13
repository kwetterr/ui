<template>
  <div class="container form">
    <h1 class="title">Newsfeed</h1>

    <div class="container create-kwat">
      <textarea
        class="kwat-text textarea"
        placeholder="What are you up to today?"
      />
      <Btn :text="'Post'" @click="test()"/>
    </div>

    <div class="kwat-container">
      <Kwat
        v-for="k in kwats"
        :key="k.id"
        :username="k.username"
        :usertag="k.usertag"
        :likes="k.likes"
        :text="k.text"
        :created_at="k.created_at"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Kwat from "@/components/kwat/Kwat.vue";
import Btn from "@/components/standard/Btn.vue";
import router from "@/router";
import kwats from "@/data/Kwats";
import Validator from "@/helpers/Validator";

const Home = defineComponent({
  components: {
    Kwat,
    Btn,
  },
  data() {
    return {
      submit: "Login",
      kwats: kwats,
    };
  },
  methods: {
    login(): void {
    },
    test() : void {
      router.push({ name: "Login" });
    }
  },
  created() {
    const validator = new Validator();
    validator.RedirectIfInvalid();
  }
});
export default Home;
</script>

<style lang="postcss" scoped>
.table-section {
  margin-left: 5%;
  margin-top: 5%;
}

.kwat-text {
  margin-bottom: 10px;
}

.form {
  margin: 50px 15% 0 15%;
}

.kwat-container {
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>