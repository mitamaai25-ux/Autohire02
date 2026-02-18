const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { email, password, role } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashed,
    role
  });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
};
exports.chatbot = async (req, res) => {
  const { message } = req.body;

  let response;

  if (message.includes("hire")) {
    response = "To hire, post a job and review freelancer proposals.";
  } 
  else if (message.includes("skills")) {
    response = "Update your profile skills to get better AI job matching.";
  }
  else {
    response = "I’m AutoHire AI Assistant. Ask me about hiring or job matching.";
  }

  res.json({ reply: response });
};
