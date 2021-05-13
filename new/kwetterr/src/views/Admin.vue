<template>
  <div class="container is-fullhd">
    <section class="table-section">
        <label class="label is-size-4 has-text-weight-bold has-text-black">
          Search
        </label>
        <InputField />
        <Table />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Validator from "@/helpers/Validator";

import InputField from "@/components/standard/Input.vue";
import Table from "@/components/table/Table.vue";

const Admin = defineComponent({
  components: {
    InputField,
    Table,
  },
  created() {
    const validator = new Validator();
    validator.RedirectIfInvalid();
  }
});
export default Admin;
</script>

<style lang="postcss" scoped>
.table-section {
  margin-left: 5%;
  margin-top: 5%;
}
</style>