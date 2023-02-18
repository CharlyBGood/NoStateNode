import { Router } from "express";
import { createUser, verifyUser } from "../controllers/users.controller";

//  Router
const router = Router();

// show registration form
router.get("/register", (req, res) => {
  res.render("register");
});

// show login form
router.get("/login", (req, res) => {
  res.render("login");
});

// show registration page for new user
router.post("/users/create", createUser);

// handle login for verified user
router.post("/users/login", verifyUser);

export default router;
