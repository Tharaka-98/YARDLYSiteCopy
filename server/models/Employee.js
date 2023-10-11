const mongoose = require('mongoose');

// Define a schema for your Sign Employee model
const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Define a schema for your User model
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
  });

const EmployeeModel = mongoose.model('employees', EmployeeSchema);
const UserModel = mongoose.model('User', UserSchema);

module.exports = {EmployeeModel, UserModel};