<template>
  <div class="">
    <Navbar :isNewsFeed="true" />
    <div class="newsfeed-content">
      <div class="header">
        <div class="text-base">Newsfeed</div>
        <hr />
      </div>
      <div class="content">
        <KwatList />
        <div class="right">
          <ProfileOverview />
          <TrendOverview />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

import Vue from "vue";
import Navbar from "@/components/Navbar.vue";
import KwatList from "@/components/KwatList.vue";
import ProfileOverview from "@/components/ProfileOverview.vue";
import TrendOverview from "@/components/TrendOverview.vue";

export default Vue.extend({
  name: "Newsfeed",
  components: {
    Navbar,
    KwatList,
    ProfileOverview,
    TrendOverview,
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.newsfeed-content {
  padding: 2em;
}

.header {
  margin-bottom: 0.5em;
}

.content {
  display: flex;
  flex-direction: row;

  .right {
    height: 80vh;
    width: 100%;
    flex: 0 1 auto;
    overflow: hidden;
    @media only screen and (max-width: 1300px) {
      display: none;
    }
  }
}
</style>