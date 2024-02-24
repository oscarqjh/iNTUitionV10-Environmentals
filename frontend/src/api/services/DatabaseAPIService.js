import http from "../common";

/**
 * Get all users
 * @returns {Promise}
 */
const getAllUsers = () => {
  return http.get("/users/getAllUsers");
};

/**
 * Add a new user
 * @param {object} data
 * @returns {Promise}
 */
const addUser = (data) => {
  return http.post("/users/addUsers", data);
};

const DatabaseAPIService = {
  getAllUsers,
  addUser,
};

export default DatabaseAPIService;
