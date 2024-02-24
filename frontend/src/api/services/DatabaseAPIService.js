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

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise}
 */
const getByGmail = (email) => {
  return http.get(`/users/getUserByEmail/${email}`);
};

const DatabaseAPIService = {
  getAllUsers,
  addUser,
  getByGmail,
};

export default DatabaseAPIService;
