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
  res.redirect("/content");
};

// function to encrypt passwrod with bcrypt

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPwrd = await bcrypt.hash(password, salt);
  return hashedPwrd;
};

// //////////////////////////////////

export const verifyUser = async (req, res) => {
  const { username, password } = req.body;

  // search user on db
  const user = await User.findOne({ username });

  // if user doesn't exists, show err msg
  if (!user) {
    // res.render("login", { error: "User doesn't exists!" });
    req.flash('error_msg', 'You have to createa user!!');
    res.render("login")
    return;
  }

  const validPassword = await bcrypt.compare(password, user.password);

  // if password is incorrect
  if (!validPassword) {
    res.render("login", { error: "Password incorrect!" });
    return;
  }

  // If everithing is fine, show dashboard
  res.redirect("/content");
};
