<template>
  <tr>
    <th><abbr>{{ user.id }}</abbr></th>
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>
      <div class="select is-link is-small">
        <select>
          <option v-for="role in roles" :key="role">{{ role }}</option>
        </select>
      </div>
    </td>
    <td class="has-text-link"><ins>Edit</ins></td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { UserModel } from "@/types/user/UserModel";

export default defineComponent({
  name: "TableRow",

  props: {
    user: {
      type: Object as PropType<UserModel>,
      required: true,
    }
  },

  data() : Object {
    return {
      roles: ["User", "Moderator", "Admin"]
    }
  }
});
</script>

<style lang="scss" scoped>
td {
  cursor: pointer;
}
</style>