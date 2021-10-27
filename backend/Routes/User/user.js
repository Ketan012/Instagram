const express = require('express');
const route = express.Router();

const controllers = require('../../Controllers');

const upload = require('../../Middleware/Upload');

const UserProfile = require('../../Models/UserProfile');
//auth controllers

const { userControllers, userProfileControllers } = controllers;
const { createUser, getAllUser, getUserById, updateUser, removeProfilePhoto, getUserData } = userControllers;
const { updateUserProfile, getUserProfile, deleteUserProfile, deleteAll } = userProfileControllers;

route.get('/users', getAllUser);

route.param('id', getUserById);

//TODO: to create controllers

// route.post('/', createUser);

// route.put('/:id', updateUser);

route.get('/userdataprofile', getUserProfile);

route.get('/:id', getUserData);

route.post('/userprofile/:id', upload.single('image') ,updateUserProfile);

route.delete('/userprofile/:id', deleteUserProfile);

route.delete('/deleteAll', deleteAll);
module.exports = route;