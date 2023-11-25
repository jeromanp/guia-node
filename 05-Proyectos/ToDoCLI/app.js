import { createInterface } from "readline";
import chalk from "chalk";

let tasks = [];
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log("\n");
  console.log(chalk.blue.bold("👌😎******* To Do App *******😎👌"));
  console.log(chalk.red("Menu de Opciones:  "));
  console.log("1. Agregar tarea");
  console.log("2. Listar tareas");
  console.log("3. Completar tarea");
  console.log("4. Eliminar tarea");
  console.log("5. Salir");
  console.log("\n");
}

function addTask() {
  rl.question(chalk.bgMagentaBright("Escribe la tarea:  "), (task) => {
    tasks.push({ task, completed: false });
    console.log(chalk.green.bold("Tarea agregada con éxito\n"));
    displayMenu();
    chooseOption();
  });
}

function listsTasks() {
  console.log(chalk.yellow.bold("\n🦊🦊🦊🦊🦊 Tareas 🦊🦊🦊🦊🦊\n"));

  if (tasks.length === 0) {
    console.log(chalk.green.bold("No hay tareas por hacer 😀👌🏻\n"));
  } else {
    tasks.forEach((task, index) => {
      let status = task.completed ? "✅" : "❌";

      if (task.completed) {
        console.log(
          chalk.greenBright(`${index + 1}. ${status} - ${task.task}`)
        );
      } else {
        console.log(chalk.redBright(`${index + 1}. ${status} - ${task.task}`));
      }
    });
  }

  displayMenu();
  chooseOption();
}

function completeTask() {
  if (tasks.length === 0) {
    console.log(chalk.red("Lo siento, No hay tareas para eliminar :("));
    displayMenu();
    chooseOption();
  } else {
    console.log(chalk.bgCyan("¿Qué tarea vas a completar?"));
    tasks.forEach((task, index) => {
      let status = task.completed ? "✅" : "❌";

      if (task.completed) {
        console.log(
          chalk.greenBright(`${index + 1}. ${status} - ${task.task}`)
        );
      } else {
        console.log(chalk.redBright(`${index + 1}. ${status} - ${task.task}`));
      }
    });
  }
  rl.question(
    chalk.bgMagentaBright("Digita el número de la tarea a completar: "),
    (taskNumber) => {
      const index = parseInt(taskNumber) - 1;
      if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log(chalk.green.bold("Tarea marcada con exito ✅\n"));
      } else {
        console.log(chalk.red.bold("Número de tarea inválido \n"));
      }
      displayMenu();
      chooseOption();
    }
  );
}

function deleteTask() {
  if (tasks.length === 0) {
    console.log(chalk.red("Lo siento, No hay tareas para eliminar :("));
    displayMenu();
    chooseOption();
  } else {
    console.log(chalk.bgCyan("¿Qué tarea vas a eliminar?"));
    tasks.forEach((task, index) => {
      let status = task.completed ? "✅" : "❌";

      if (task.completed) {
        console.log(
          chalk.greenBright(`${index + 1}. ${status} - ${task.task}`)
        );
      } else {
        console.log(chalk.redBright(`${index + 1}. ${status} - ${task.task}`));
      }
    });
  }

  rl.question(
    chalk.bgRed("Digita el número de la tarea a eliminar: "),
    (taskDelete) => {
      const index = parseInt(taskDelete) - 1;
      const result = tasks.filter((task, i) => i !== index);
      tasks = result;
      console.log(chalk.green("¡Tarea eliminada correctamente!"));
      displayMenu();
      chooseOption();
    }
  );
}

function chooseOption() {
  rl.question("Escribe el numero deacuerdo a tu opcion:", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        listsTasks();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        deleteTask();
        break;
      case "5":
        console.log(chalk.greenBright("Salir"));
        rl.close();
        break;
      default:
        console.log(chalk.red("Opcion NO valida, Intenta de nuevo \n"));
        displayMenu();
        chooseOption();
        break;
    }
  });
}

displayMenu();
chooseOption();
