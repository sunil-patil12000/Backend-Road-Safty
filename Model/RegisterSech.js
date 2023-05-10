const { default: mongoose } = require("mongoose");

const registerSche = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  c_address: {
    type: String,
    required: true,
  },
  p_address: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  p_number: {
    type: String,
    required: true,
  },
  BloodGroup: {
    type: String,
    required: true,
  },
  garden_name: {
    type: String,
    required: true,
  },
  g_number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("register", registerSche);
