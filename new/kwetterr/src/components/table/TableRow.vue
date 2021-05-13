<template>
  <tr>
    <th>
      <abbr>{{ user.id.substring(0, 5) }}</abbr>
    </th>
    <td @click="openUserProfile()">{{ user.name }}</td>
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
import router from "@/router";

export default defineComponent({
  name: "TableRow",

  props: {
    user: {
      type: Object as PropType<UserModel>,
      required: true,
    },
  },

  data(): Object {
    return {
      roles: ["User", "Moderator", "Admin"],
    };
  },
  methods: {
    openUserProfile() {
      router.push({
        name: "profile",
        params: {
          username: this.user.username
        }
      });
    },
  },
});
</script>

<style lang="scss" scoped>
td {
  cursor: pointer;
}
</style>