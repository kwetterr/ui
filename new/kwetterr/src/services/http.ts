import { UserModel } from '@/types/user/UserModel';
import axios from 'axios';
import { use } from 'vue/types/umd';

export default axios.create({
  baseURL: "http://localhost:3000", //process.env.VUE_APP_API_GATEWAY
  params: {
    // API params go here
  },
  headers: {
    Authorization: getToken()
  }
});

function getToken() {
  const user = localStorage.getItem("user");
  if(user) {
    const userModel: UserModel = JSON.parse(user);
    return userModel.token;
  }
  return "";
}

