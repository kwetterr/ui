<template>
  <div class="profile-overview">
    TrendOverview
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RegularAvatar from "./Avatar.vue";



@Component({
  components: {
    RegularAvatar,
  },
})
export default class TrendOverview extends Vue {
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/_variables.scss";

.profile-overview {
  width: 100%;
  height: 40%;
  background-color: blue;
}

</style>
