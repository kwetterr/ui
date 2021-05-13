import axios from 'axios';

export default axios.create({
  baseURL: "http://localhost:3000", //process.env.VUE_APP_API_GATEWAY
  params: {
    // API params go here
  }
});



