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
import InputField from "@/components/standard/Input.vue";
import Table from "@/components/table/Table.vue";
import { defineComponent } from "vue";

const Admin = defineComponent({
  components: {
    InputField,
    Table,
  },
});
export default Admin;
</script>

<style lang="postcss" scoped>
.table-section {
  margin-left: 5%;
  margin-top: 5%;
}
</style>