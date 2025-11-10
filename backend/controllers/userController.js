const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { 
    expiresIn: "3d",
    algorithm: 'HS256' 
   });
};

// signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const resetUser = async (req, res) => {
  const { email, currentPassword, newPassword, confirmedPassword } = req.body

  try {
    const resetPassword = await User.reset(email, currentPassword, newPassword, confirmedPassword )
    res.status(200).json({ message: "password reset successful!" })
  }  catch (error) {
    res.status(400).json({ error: error.message });
  } 
}

module.exports = {
  loginUser,
  signupUser,
  resetUser
};
