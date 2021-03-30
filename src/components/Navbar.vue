<template>
  <div class="nav-container">
    <div class="nav-main">
      <Logo style="margin-left: 2em" width="35px" />
      <div class="btn-container-big">
        <Button
          :style="btnBarStyle"
          v-for="(tab, index) in tabs"
          :key="tab.name"
          :btnClass="tab.class"
          :text="tab.name"
          @btn-clicked="active(index)"
        />
      </div>
      <div class="search-container">
        <Searchbar />
      </div>
      <div class="avatar-container">
        <Avatar :url="userImgUrl" />
      </div>
    </div>

    <div class="nav-extra">
      <div class="btn-container-extra">
        <Button
          :style="btnBarStyle"
          v-for="(tab, index) in tabs"
          :key="tab.name"
          :btnClass="tab.class"
          :text="tab.name"
          @btn-clicked="active(index)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./Button.vue";
import Logo from "./Logo.vue";
import { Tab } from "@/models/Tab.ts";
import Searchbar from "./Searchbar.vue";
import Avatar from "./Avatar.vue";

@Component({
  components: {
    Button,
    Logo,
    Searchbar,
    Avatar,
  },
})
export default class Navbar extends Vue {
  /* Tab logic */
  @Prop()
  private isNewsFeed!: boolean;

  get btnBarStyle(): string {
    if (this.isNewsFeed) {
      return "";
    } else {
      return "display: none;";
    }
  }

  private tabs: Tab[] = [
    new Tab("Start", "btn"),
    new Tab("Trending", "btn inactive"),
    new Tab("Mentions", "btn inactive"),
  ];
  active(pos: number): void {
    this.tabs.forEach((tab) => {
      tab.class = "btn inactive";
    });
    this.tabs[pos].class = "btn";
  }

  private userImgUrl: string = require("@/assets/user.png");
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/_variables.scss";

.nav-container {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: $light-gray-color;
}

.nav-main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  align-content: center;
}

.btn-container-big {
  display: flex;

  .btn {
    margin: 0 1em;
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
}

.btn {
  display: block;
}

.search-container {
  width: 40vw;
}



.nav-extra {
  display: none;
}

@media only screen and (max-width: 1000px) {
.nav-extra {
  overflow: hidden;
  display: flex;
  padding: 10px 0;

    .btn-container-extra {
      display: flex;
      justify-content: space-evenly;
      margin: auto
    }
  }
}

</style>
