import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.PROD
    ? "https://intuitionv10-environmentals.onrender.com"
    : "http://localhost:3000",

  credentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
