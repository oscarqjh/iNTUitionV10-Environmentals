import http from "../common";

/**
 * Get all users
 * @returns {Promise}
 */
const getAllUsers = async () => {
  return http.get("/users/getAllUsers");
};

/**
 * Add a new user
 * @param {object} data
 * @returns {Promise}
 */
const addUser = async (data) => {
  return http.post("/users/addUsers", data);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise}
 */
const getByGmail = async (email) => {
  return http.get(`/users/getUserByEmail/${email}`);
};

/**
 * Check if otp is valid
 * @param {string} verifyRecycleOtp
 * @returns {Promise}
 */
const verifyRecycleOtp = async (otp) => {
  return http.post("/otp/verifyRecycleOtp", { recycleOtp: otp });
};

const updateUser = async (data) => {
  const newData = {
    email: data.userEmail,
    userData: data,
  };
  return http.put("/users/updateUser", newData);
};

const DatabaseAPIService = {
  getAllUsers,
  addUser,
  getByGmail,
  verifyRecycleOtp,
  updateUser,
};

export default DatabaseAPIService;
