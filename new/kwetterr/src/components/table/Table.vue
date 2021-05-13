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
        <TableRow v-for="user in filteredUsers" :key="user.id" :user="user" />
      </tbody>
    </table>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TableRow from "@/components/table/TableRow.vue";
import { UserModel } from "@/types/user/UserModel";

const Table = defineComponent({
  components: {
    TableRow,
  },
  props: {
    users: {
      type: Array as PropType<Array<UserModel>>,
    },
    filter: {
      type: String,
      value: "",
    },
  },
  data() {
    return {
      filteredUsers: new Array<UserModel>(),
    };
  },
  watch: {
    users() {
      if (this.users) {
        if (this.filter) {
          var filterRef: string = this.filter;
          this.filteredUsers = this.users.filter((u) =>
            u.name.includes(filterRef)
          );
        } else {
          this.filteredUsers = this.users;
        }
      }
    },
    filter(newValue) {
      this.recalculateTable(newValue);
    },
  },
  methods: {
    recalculateTable(newValue: string): void {
      if (this.users) {
        if (!newValue) {
          this.filteredUsers = this.users;
        }
        if (this.filter) {
          this.filteredUsers = this.users.filter((u) =>
            u.name.includes(newValue)
          );
        } else {
          this.filteredUsers = this.users;
        }
      }
    },
  },
});

export default Table;
</script>
