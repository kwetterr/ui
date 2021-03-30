<template>
  <div class="kwat-container">
    <div class="left">
      <RegularAvatar :url="kwat.user_profile" />
    </div>
    <div class="right">
      <div class="header">
        <div class="name">{{ kwat.user_name }}</div>
        <div class="username">{{ kwat.user_tagname }}</div>
        <div class="time">{{ getTimeDiff(kwat.created_at) }}</div>
      </div>
      <div class="content">
        {{ kwat.content }}
      </div>
      <div class="actions">
        <div class="like" @click="likeAction()">
          <Heart :liked="liked" :likeCount="kwat.likes" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import RegularAvatar from "./RegularAvatar.vue";
import Heart from "./Heart.vue";
import KwatModel from "@/models/Kwat";

@Component({
  components: {
    RegularAvatar,
    Heart,
  },
})
export default class Kwat extends Vue {
  //public kwatterUrl: string = require("@/assets/user.png");
  public liked: Boolean = false;

  @Prop()
  public kwat!: KwatModel;

  likeAction(): void {
    this.liked = !this.liked;
  }

  public getTimeDiff(createdAt: number): string {
    var now: Date = new Date();
    var createdAtType: Date = new Date(createdAt * 1000);
    console.log("createdat", createdAt);
    return this.timeDifference(now, createdAtType);
  }

  timeDifference(date1: Date, date2: Date): string {
    // https://stackoverflow.com/questions/16767301/calculate-difference-between-2-timestamps-using-javascript

    var difference = date1.getTime() - date2.getTime();
    console.log("d1", date1);
    console.log("d2", date2);

    var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24;

    var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60;

    var minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60;

    var secondsDifference = Math.floor(difference / 1000);

    if (daysDifference >= 1) {
      return `${daysDifference}d`;
    }
    if (hoursDifference >= 1) {
      return `${hoursDifference}d`;
    }
    if (minutesDifference >= 1) {
      return `${minutesDifference}m`;
    }
    return `${secondsDifference}s`;
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.kwat-container {
  display: flex;
  font-size: $regular-text;
  font-family: $font-family;
  width: 50vw;
  min-width: 540px;
  max-width: 800px;
  max-width: 80%;

  @media only screen and (max-width: 600px) {
    min-width: 85vw;
    font-size: $small-text;
  }
}

.left {
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media only screen and (max-width: 600px) {
    width: 20%;
  }
}

.right {
  width: 80%;

  .header {
    display: flex;
    column-gap: 20px;
    font-size: $regular-text;
    font-weight: 150;

    .name {
      font-weight: 450;
    }
  }

  .content {
    min-height: 15vh;
    white-space: pre-line;
    @apply p-5 bg-gray-100 text-gray-900 text-base font-normal rounded-md shadow-md;
  }

  .actions {
    display: flex;
    justify-content: flex-end;

    .like {
      padding: 1em;
    }
  }
}
</style>