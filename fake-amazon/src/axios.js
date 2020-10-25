import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-fake-c91c5.cloudfunctions.net/api",
});

export default instance;
