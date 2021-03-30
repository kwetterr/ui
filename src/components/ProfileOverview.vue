<template>
  <div class="profile-overview">
    <div class="overview-header">Your kwats: 87</div>
    <Kwat :kwat="kwat" />

    <div class="friends">
      <div class="friends-overview">
        <div class="friends-title">Followers</div>
        <div class="list">
          <RegularAvatar
            v-for="u in users"
            :key="u.id"
            :url="u.avatar_link"
            width="10px"
          />
        </div>
        <div class="friends-end">Meer</div>
      </div>
      <div class="friends-overview">
        <div class="friends-title">Followers</div>
        <div class="list">
          <RegularAvatar
            v-for="u in users"
            :key="u.id"
            :url="u.avatar_link"
            width="10px"
          />
        </div>
      <div class="friends-end">Meer</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import RegularAvatar from "./RegularAvatar.vue";
import Kwat from "./Kwat.vue";
import KwatModel from "@/models/Kwat";
import UserRef from "@/models/UserRef";
import kwatsJSON from "@/data/kwats.json";
import usersJSON from "@/data/users.json";

@Component({
  components: {
    RegularAvatar,
    Kwat,
  },
})
export default class ProfileOverview extends Vue {
  public kwat: KwatModel = kwatsJSON[0];
  public users: UserRef[] = usersJSON;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/_variables.scss";

.profile-overview {
  width: 100%;
  height: 60%;
}

.overview-header {
  font-size: $large-text;
  font-weight: 550;
}

.friends {
  display: flex;
}

.friends-overview {
  .friends-title {
    font-size: $large-text;
    font-weight: 550;
  }

  .list {
    display: flex;
  }

  .friends-end {
    font-weight: 550;
    text-decoration: underline;
    color: $purple-color;
  }
}
</style>
