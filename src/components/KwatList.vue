<template>
  <div class="kwat-list-container">
      <Kwat v-for="k in kwats" :key="k.id" :kwat="k"  />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import RegularAvatar from "./RegularAvatar.vue";
import Kwat from "@/components/Kwat.vue";
import KwatModel from "@/models/Kwat";
import Heart from "./Heart.vue";
import kwatsJSON from "@/data/kwats.json";
 
@Component({
  components: {
    RegularAvatar,
    Heart,
    Kwat
  },
})
export default class KwatList extends Vue {
  public kwats: KwatModel[] = kwatsJSON;
}

</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.kwat-list-container {
  width: 100%;

  @media only screen and (max-width: 800px) {
    width: 50%;
  }
}

</style>