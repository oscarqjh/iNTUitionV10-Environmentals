import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.PROD
    ? "https://i-nt-uition-v10-environmentals-17q6.vercel.app"
    : "http://localhost:3000",

  credentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
