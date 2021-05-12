<template>
  <p class="card-footer-item">
    <span class="icon is-small is-right">
      <i
        :class="
          liked
            ? 'fas fa-heart has-text-danger'
            : 'fas fa-heart has-text-grey-light'
        "
      />
    </span>
    <span> {{ likes }} </span>
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const Input = defineComponent({
  props: {
    likes: {
      type: Number,
    },
    liked: {
      type: Boolean
    },
  },
});
export default Input;
</script>

<style lang="scss" scoped>
.card-footer-item {
  cursor: pointer;

  span {
    font-size: 0.8em;

    i {
      margin-right: 10px;
    }
  }
}
</style>