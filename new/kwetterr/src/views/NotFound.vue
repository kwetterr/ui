<template>
  <div class="container">
    <h1 class="title">Oops...</h1>
    <h2 class="subtitle">Looks like this page doesn't exists.</h2>
    <Btn :text="'Go back'" @click="redirect()"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";
import Btn from "@/components/standard/Btn.vue";

const NotFound = defineComponent({
  components: {
    Btn
  },
  methods: {
    redirect(): void {
      router.push("/");
    },
  },
});
export default NotFound;
</script>

<style lang="scss" scoped>
.container {
  padding: 4em;
}
</style>
