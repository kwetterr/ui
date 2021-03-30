<template>
  <div class="heart-container">
    <div :class="{ heart:true, liked: liked }" />
    <div>{{ likeCount }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Heart extends Vue {
  @Prop()
  public liked!: Boolean;
 
  @Prop()
  public likeCount!: Number;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/_variables.scss";

.heart-container {
  display: flex;
  border: none;
  justify-content: center;
  column-gap: 5px;
}

.heart {
  align-self: middle;
  cursor: pointer;
  height: 20px;
  width: 20px;
  background-image: url('~@/assets/heart.png');
  background-size: contain; 
  background-repeat: no-repeat;
  border: none;

  &.liked {
      background-image: url('~@/assets/heart-liked.png');
  }
}

</style>
