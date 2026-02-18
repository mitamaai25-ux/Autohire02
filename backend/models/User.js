const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["client", "freelancer"]
  },
  skills: [String],
  profileSummary: String
});

module.exports = mongoose.model("User", userSchema);
