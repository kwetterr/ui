<template>
  <span class="kwat-tags has-text-link">#{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const Tag = defineComponent({
  props: {
    text: {
      type: String,
      value: ""
    }
  },
});
export default Tag;
</script>

<style lang="scss" scoped>
.kwat-tags {
  font-size: 0.9rem;
  text-align: left;
  flex-basis: 33%;
  cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
}
</style>