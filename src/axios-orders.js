import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-5a66c.firebaseio.com/"
});

export default instance;
