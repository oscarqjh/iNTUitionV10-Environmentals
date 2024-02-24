import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.PROD ? "" : "http://localhost:3000",

  credentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
