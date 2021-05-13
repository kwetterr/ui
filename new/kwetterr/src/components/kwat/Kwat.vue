<template>
  <div class="card">
    <div class="card-content">
      <KwatHeader
        :username="username"
        :username_tag="usertag"
        :time_since="getTimeDiff(created_at)"
      />
      <p class="content">Once a simp always a simp.</p>
      <div class="tag-container">
        <Tag class="kwat-tags" v-for="tag in tags" :key="tag" :text="tag" />
      </div>
    </div>
    <footer class="card-footer">
      <KwatAction :likes="likes" :liked="liked" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KwatAction from "@/components/kwat/KwatAction.vue";
import KwatHeader from "@/components/kwat/KwatHeader.vue";
import Tag from "@/components/kwat/Tag.vue";

const Input = defineComponent({
  components: {
    KwatAction,
    KwatHeader,
    Tag,
  },
  props: {
    username: {
      type: String,
    },
    usertag: {
      type: String,
    },
    likes: {
      type: Number,
    },
    text: {
      type: String,
    },
    created_at: {
      type: Number,
    },
    tags: {
      type: [],
      value: Array<String>(),
    },
  },
  data() {
    return {
      liked: false,
    };
  },
  setup() {},
  methods: {
    getTimeDiff(createdAt: number): string {
      var now: Date = new Date();
      var createdAtType: Date = new Date(createdAt * 1000);
      return this.timeDifference(now, createdAtType);
    },

    timeDifference(date1: Date, date2: Date): string {
      // https://stackoverflow.com/questions/16767301/calculate-difference-between-2-timestamps-using-javascript

      var difference = date1.getTime() - date2.getTime();

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
    },
  },
});
export default Input;
</script>

<style lang="scss" scoped>
.card {
  width: 500px;
  .card-content {
    .title {
      font-size: 1em;
    }
  }
}

.tag-container {
  display: flex;
  flex-flow: wrap;
  .kwat-tags {
    
  }
}
</style>