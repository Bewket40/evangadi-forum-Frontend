import axios from "axios";

// const axiosInstance = axios.create({
//   // baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
// baseURL:"http://localhost:5000/api",
// });

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL :"https://evangadi-forum-back-i9cg.onrender.com/api",
});

export default axiosInstance;
