import { Router } from "express";

import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone
} from "../controllers/tasks.controller";

//  Router
const router = Router();

router.get("/", (req, res) => {
  res.render("welcome")
})

router.get("/content", renderTasks);

router.post("/tasks/add", createTask);

// router.get("/tasks/:id/toggleDone", taskToggleDone);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

export default router;
