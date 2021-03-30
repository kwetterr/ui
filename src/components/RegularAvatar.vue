<template>
  <div class="avater-container" @click="clickedProfile()">
    <img class="avatar" :src="url" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RegularAvatar extends Vue {
  @Prop()
  private url!: string;
  
  clickedProfile() : void {
    this.$router.push("/profile");
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/_variables.scss";

.avatar {
  height: 55px;
  width: 55px;
  border-radius: 50%;
  margin: 15px;

    @media only screen and (max-width: 600px) {
      height: 45px;
      width: 45px;
      margin: 10px;
    }
}

</style>
