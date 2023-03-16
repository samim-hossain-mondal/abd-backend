const userServices = require('../services/user.services');

async function getAllUsers(req, res, next) {
  try {
    const users = await userServices.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

async function createUsers(req, res, next) {
  try {
    const { uid, firstName, lastName, email, groups } = req.user;
    const user = await userServices.createUsers(uid, firstName, lastName, email, groups);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllUsers,
  createUsers
};