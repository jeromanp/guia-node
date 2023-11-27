import express from "express";
import { resolve } from "path";

const app = express();

app.get("/", (req, res) => {
  res.set({ "content-type": "text/html; charset=utf-8" });
  res.end("<h1>Hola mundo desde Express.js con el método end</h1>");
  //res.send("<h1>Hola mundo desde Express.js con el método send</h1>");
});

//Enviar informacion en formato json
app.get("/json", (req, res) => {
  res.json({
    name: "Jose Eduardo",
    age: 32,
    youtube: "@jeromanp",
  });
});

//Visualizar un archivo
app.get("/archivo", (req, res) => {
  res.sendFile(resolve("index.html"));
});

app.get("/plantilla", (req, res) => {
  //No funciona esta ruta porque hay que especificar el motor de plantillas a express.js
  res.render("plantilla");
});

app.get("/jeromanp", (req, res) => {
  //res.send("<h1>Bienvenidos a jeromanp.website</h1>");
  res.redirect(301, "https://jeromanp.website");
});

app.listen(3000, () =>
  console.log("Iniciando Express desde http://localhost:3000")
);