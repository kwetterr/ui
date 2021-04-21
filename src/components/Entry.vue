<template>
  <div class="input-container">
    <label class="input-label"> {{ labelName }} </label>
    <input
      class="entry"
      :type="inputType"
      v-model="currentValue"
      @change="inputChanged()"
    />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Entry extends Vue {

  @Prop() public labelName!: string;
  @Prop() public inputType!: string;

  public currentValue: string = "";//Object.assign("", this.initialValue);

  @Emit()
  public inputChanged() {
    return this.currentValue;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/_variables.scss";

.input-container {
  display: flex;
  flex-direction: column;
  width: $entry-width;
  height: 60px;
  margin: 2em 0;
}

.input-label {
  font-size: $regular-text;
  font-weight: 550;
  color: $almost-black-color;
  font-family: $font-family;
  text-align: left;
  width: $entry-width;
}

.entry {
  background-color: $light-gray-color;
  height: $entry-height;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  color: $almost-black-color;
  font-family: $font-family;
  padding: 10px;
}

@media only screen and (max-width: 1000px) {
  .entry {
    width: $entry-width / 1.5;
  }
}
</style>
