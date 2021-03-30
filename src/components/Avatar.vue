<template>
  <div class="avater-container" @click="clickedProfile()">
    <img class="avatar" :src="url" />
    <div>Aron</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Avatar extends Vue {
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

.avater-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2em;

  font-family: $font-family;
  font-weight: 550;
  cursor: pointer;
}

.avatar {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin-right: 10px;
}

</style>
