import User from "../models/Users";

export const createUser = async (req, res) => {
  const user = User(req.body);
  const userCreated = await user.save();
  console.log(userCreated);
  res.redirect("/tableComplete");
};
