<template>
  <div class="container is-fullhd">
    <section class="table-section">
      <label class="label is-size-4 has-text-weight-bold has-text-black">
        Search
      </label>
      <InputField @valueChanged="searchFilterChanged" />
      <Table :users="userModels" :filter="filter" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Validator from "@/helpers/Validator";

import { userService } from "@/services/UserService";
import { UserModel } from "@/types/user/UserModel";

import InputField from "@/components/standard/Input.vue";
import Table from "@/components/table/Table.vue";

const UserOverview = defineComponent({
  components: {
    InputField,
    Table,
  },
  data() {
    return {
      userModels: Array<UserModel>(),
      filter: "",
    };
  },
  methods: {
    searchFilterChanged(filter: string) {
      this.filter = filter;
    }
  },
  created() {
    const validator = new Validator();
    validator.RedirectIfInvalid();

    userService.getAll().then((users: Array<UserModel>) => {
      this.userModels = users;
    });
  },
});
export default UserOverview;
</script>

<style lang="postcss" scoped>
.table-section {
  margin-left: 5%;
  margin-top: 5%;
}
</style>