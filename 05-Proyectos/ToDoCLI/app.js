import { createInterface } from "readline";
import chalk from "chalk";
import { log } from "console";

const tasks=[]
const rl=createInterface({
    input:process.stdin,
    output:process.stdout
})

function displayMenu(){
    console.log(chalk.blue.bold("👌😎******* To Do App *******😎👌"));
    console.log("\n");
    console.log(chalk.red("Menu de Opciones:"));
    console.log("1. Agregar tarea");
    console.log("2. Listar tareas");
    console.log("3. Completar tarea");
    console.log("4. Salir");
    console.log("\n");
}

function chooseOption(){
    rl.question("Escribe el numero deacuerdo a tu opcion:",(choice)=>{
        switch(choice){
            case "1":
                console.log("Crear tarea")
                break
            case "2":
                console.log("Listar tareas");
                break
            case "3":
                console.log("Completar tarea");
                break
            case "4":
                console.log(chalk.greenBright("Salir"));
                rl.close()
                break
            default:
                console.log(chalk.red("Opcion NO valida, Intenta de nuevo \n"));
                displayMenu()
                chooseOption()
                break
        }

    })
}

displayMenu()
chooseOption()