import Task from "../models/Task";

export const renderTasks = async (req, res) => {
  const task = await Task.find().lean();

  res.render("index", { tasks: task });
};

export const createTask = async (req, res) => {
  const task = Task(req.body);
  await task.save();
  res.redirect("/");
};

export const renderTaskEdit = async (req, res) => {
  const task = await Task.findById(req.params.id).lean();
  res.render("edit", { task });
};

export const editTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);
  
  res.redirect("/");
};

// export const taskToggleDone = async (req, res) => {
//   const { id } = req.params;

//   const task = await Task.findById(id);

//   task.done = !task.done;

//   await task.save();

//   res.redirect("/");
// };
