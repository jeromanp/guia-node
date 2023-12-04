import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import taskController from "./controllers/taskController.js";
import errorController from "./controllers/errorController.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/task", taskController.getAllTasks);
app.post("/task", taskController.addTask);
app.put("/task/:id", taskController.editTask);
app.put("/task/complete/:id", taskController.completeTask);
app.put("/task/uncomplete/:id", taskController.uncompleteTask);
app.delete("/task/:id", taskController.deleteTask);

app.use(errorController.error404);

app.listen(port, () => {
  console.log(`La API está funcionando en http://localhost/task:${port}`);
});