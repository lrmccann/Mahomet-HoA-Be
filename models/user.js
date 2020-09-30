const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  // title: { type: String, required: true },
  password: String,
  salt: String,
  userData: {
    sessionToken: String,
    userName:  String,
    email: String,
    PhotoUrl: String,
    position: String,
    streetAddress:  String,
    zipCode: String,
    city: String,
    pets: Number,
    numberOfResidents: Number,
    attendingMeeting: Boolean,
    guideLines: Boolean,
    info: String,
    date: { type: Date, default: Date.now }
  }
});

const User = mongoose.model("Users", usersSchema);

module.exports = User;
