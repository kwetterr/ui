<template>
    <img class="logo" @click="onClick()"  :width="width" :height="width" src="../../public/favicon.svg" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from './Button.vue';

@Component
export default class Logo extends Vue {
  @Prop({default: '100px'}) readonly width!: string

  onClick() : void {
    if(this.$route.name != "Newsfeed") {
      console.log(this.$route.name)
      this.$router.push("/newsfeed");
    }
  }
}

</script>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
}


</style>