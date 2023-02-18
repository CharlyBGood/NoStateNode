import User from "../models/Users";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { username, password } = req.body;

  // Encrypt password with bcrypt
  const hashedPwrd = await hashPassword(password);

  const user = new User({
    username,
    password: hashedPwrd,
  });

  const userCreated = await user.save();
  console.log(userCreated);
  res.redirect("/tableComplete");
};

// function to encrypt passwrod with bcrypt

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPwrd = await bcrypt.hash(password, salt);
  return hashedPwrd;
};
