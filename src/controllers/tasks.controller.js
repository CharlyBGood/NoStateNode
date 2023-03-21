import Task from "../models/Task";

export const renderTasks = async (req, res) => {
  const task = await Task.find().lean();

  res.render("content", { tasks: task });
};

export const createTask = async (req, res) => {
  const task = Task(req.body);
  req.flash('success_msg', 'Content created successfully!!');
  await task.save();
  res.redirect("/content");
};

export const renderTaskEdit = async (req, res) => {
  const task = await Task.findById(req.params.id).lean();
  res.render("edit", { task });
};

export const editTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);
  req.flash('success_msg', 'Content updated successfully');
  res.redirect("/content");
};

export const deleteTask = async (req, res, e) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);
  req.flash('success_msg', 'Content deleted successfully');
  res.redirect("/content");
};

// export const taskToggleDone = async (req, res) => {
//   const { id } = req.params;

//   const task = await Task.findById(id);

//   task.done = !task.done;

//   await task.save();

//   res.redirect("/");
// };
