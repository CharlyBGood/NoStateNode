import { Router } from "express";
import { createUser } from "../controllers/users.controller";

//  Router
const router = Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/users/create", createUser);

export default router;
