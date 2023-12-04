let tasks = [
  { id: 1, title: "Tarea 1", completed: false },
  { id: 2, title: "Tarea 2", completed: true },
];

const getAllTasks = (req, res) => {
  res.json({tasks})
};

const addTask = (req, res) => {
  //console.log(req.body);
  let { title } = req.body;
  let id = tasks.length + 1;
  tasks.push({ id, title, completed: false });
  res.redirect("/");
};

const editTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);
  //console.log(taskIndex);

  if (taskIndex === -1) {
    res.redirect("/");
  } else {
    tasks[taskIndex].title = req.body.title;
    res.redirect("/");
  }
};

const completeTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = true;
  }

  res.redirect("/");
};

const uncompleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = false;
  }

  res.redirect("/");
};

const deleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== id);
  res.redirect("/");
};

export default {
  getAllTasks,
  addTask,
  editTask,
  completeTask,
  uncompleteTask,
  deleteTask,
};