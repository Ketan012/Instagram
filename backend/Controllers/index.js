const {
  login,
  signup,
  sendEmail,
  verificationCodeByPhone,
  verifyEmail,
  isLoggedin,
  isAuthenticated,
} = require("./Authentication/auth");

const {
  updateUserProfile,
  getUserProfile,
  deleteUserProfile,
  deleteAll,
} = require("./User/userProfile");

const {
  getAllUser,
  getUserById,
  getUserData,
  userFollowing,
  getFollowings,
  getFollowers,
  accountPrivacy,
  updateUserBio,
  blockedList,
  unFollowUser,
  removeFollower,
} = require("./User/user");

const authControllers = {
  login,
  signup,
  sendEmail,
  verificationCodeByPhone,
  verifyEmail,
  isAuthenticated,
  isLoggedin,
};

const userControllers = {
  getAllUser,
  getUserById,
  getUserData,
  userFollowing,
  getFollowings,
  getFollowers,
  accountPrivacy,
  updateUserBio,
  blockedList,
  unFollowUser,
  removeFollower,
};

const userProfileControllers = {
  updateUserProfile,
  getUserProfile,
  deleteUserProfile,
  deleteAll,
};

const controllers = {
  authControllers,
  userControllers,
  userProfileControllers,
};

module.exports = controllers;
