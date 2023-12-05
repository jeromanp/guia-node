let tasks = [
  { id: 1, title: "Tarea 1", completed: false },
  { id: 2, title: "Tarea 2", completed: true },
];

const getAllTasks = (req, res) => {
  res.json({ tasks });
};

const addTask = (req, res) => {
  let { title } = req.body;
  if (!title) {
    res
      .status(404)
      .json({ error: true, message: "Falta el título de la tarea" });
  } else {
    let id = tasks.length + 1;
    tasks.push({ id, title, completed: false });
    res.json({ error: false, message: "Tarea Agregada" });
  }
};

const getTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    res.status(404).json({ error: true, message: "Tarea no encontrada" });
  } else {
    res.json({ task: tasks[taskIndex] });
  }
};

const editTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    res.status(404).json({ error: true, message: "Tarea no encontrada" });
  } else {
    tasks[taskIndex].title = req.body.title;
    res.json({ error: false, message: "Tarea Agregada" });
  }
};

const completeTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = true;
    res.json({ error: false, message: "Tarea Completada" });
  } else {
    res.status(404).json({ error: true, message: "Tarea no encontrada" });
  }
};

const uncompleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = false;
    res.json({ error: false, message: "Tarea No Completada" });
  } else {
    res.status(404).json({ error: true, message: "Tarea no encontrada" });
  }
};

const deleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    res.status(404).json({ error: true, message: "Tarea no encontrada" });
  } else {
    tasks.slice(taskIndex, 1);
    res.json({ error: false, message: "Tarea Eliminada" });
  }
};

export default {
  getAllTasks,
  addTask,
  getTask,
  editTask,
  completeTask,
  uncompleteTask,
  deleteTask,
};
