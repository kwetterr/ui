<template>
  <div class="container">
    <h1 class="title">Profile</h1>
    <img :src="user.avatar" />
    <div class="is-size-1">{{ user.username }}</div>
    <div><b>Username: </b>{{ user.name }}</div>
    <div><b>Email: </b>{{ user.email }}</div>
    <div><b>Country: </b>{{ user.country }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { userService } from "@/services/UserService";

import { UserModel } from "@/types/user/UserModel";

const Profile = defineComponent({
  data() {
    return {
      user: {
        avatar: "",
        username: "",
        name: "",
        email: "",
        country: "",
      } as UserModel,
      username: "",
    };
  },
  mounted() {
    const route = useRoute();
    const validate = route.params.username;
    let name: string = "";
    if (Array.isArray(validate)) {
      name = route.params.username[0];
    } else {
      name = route.params.username as string;
    }
    if (name) {
      userService.getByUsername(name).then((user: UserModel) => {
        this.user = user;
      });
    }
  },
});
export default Profile;
</script>

<style lang="scss" scoped>
.container {
  padding: 1em;
}

img {
  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>