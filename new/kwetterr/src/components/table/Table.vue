<template>
  <transition>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>User</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <TableRow v-for="user in users" :key="user.id" :user="user" />
      </tbody>
    </table>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableRow from "@/components/table/TableRow.vue";
import users from "@/data/TableUsers";

const Table = defineComponent({
  components: {
    TableRow,
  },
  data() {
    return {
      users: users,
    };
  },
});

export default Table;
</script>
