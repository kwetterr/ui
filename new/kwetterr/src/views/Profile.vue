<template>
  <div class="container">
    <div class="card-container">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="user.avatar" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <img class="k-image" :src="user.avatar" alt="Placeholder image" />
            </div>
            <div class="media-content">
              <p class="title is-4">{{ user.name }}</p>
              <p class="subtitle is-4">@{{ user.username }}</p>
            </div>
          </div>

          <div class="content">
            <p class="subtitle is-6"><b>Email: </b> {{ user.email }}</p>
            <p class="subtitle is-6"><b>Country: </b> {{ user.country }}</p>
            <blockquote>
              {{ user.biography }}
            </blockquote>
          </div>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
    <div class="kwat-container">
      <Kwat
        v-for="k in kwats"
        :key="k.id"
        :username="k.username"
        :usertag="k.usertag"
        :likes="k.likes"
        :text="k.text"
        :created_at="k.created_at"
        :tags="k.tags"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { userService } from "@/services/UserService";

import { UserModel } from "@/types/user/UserModel";
import kwats from "@/data/Kwats";

import Kwat from "@/components/kwat/Kwat.vue";

const Profile = defineComponent({
  components: {
    Kwat,
  },
  data() {
    return {
      user: {
        avatar: "",
        username: "",
        biography: "",
        name: "",
        email: "",
        country: "",
      } as UserModel,
      username: "",
      kwats: kwats,
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
  display: flex;
  flex-direction: row;
  padding: 1em;
  justify-content: space-evenly;

  .kwat-container {
    width: 50%;
  }

  .card-container {
    width: 30%;
    max-width: 500px;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    height: 600px;
  }

  @media only screen and (max-width: 1300px) {
    flex-direction: column;

    .card-container {
      position: relative;
      width: 80%;
      margin-bottom: 200px;
    }
    .kwat-container {
      width: 80%;
    }
  }
}
.k-image {
  object-fit: cover;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.kwat-container {
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>