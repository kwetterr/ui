<template>
  <div :class="btnClass" @click="onClick()">
     {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class Button extends Vue {

  @Prop()
  private text!: string;

  @Prop()
  private btnClass!: string;

  onClick(): void {
    this.$emit("btn-clicked");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/_variables.scss";

.btn {
  text-align: center;
  vertical-align: middle;
  height: 35px;
  width: 125px;
  line-height: 35px;

  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  color: $white-color;
  font-family: "Helvetica Neue", Helvetica -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif,
    sans-serif;
  font-size: $regular-text;
  font-weight: 450;
  color: $white-color;
  background: $pink-gradient-vert;

  @media only screen and (max-width: 600px) {
    width: 100px;
  }

  &.inactive {
    color: $almost-black-color;
    background: transparent;
    box-shadow: none;
  }
}
</style>