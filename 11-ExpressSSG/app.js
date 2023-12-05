import express from "express";
import fs from "fs/promises";
import path from "path";
import markdownIt from "markdown-it";
import fm from "front-matter";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("views", path.join(__dirname, "pages"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

// Rutas dinámicas desde archivos en la carpeta "pages"
const pagesDir = path.join(__dirname, "pages");
const files = await fs.readdir(pagesDir);

// Aquí lógica para archivos html y md

//Ruta de la página principal
app.get("/", (req, res) => {
    res.render("index");
  });
  
  //Ruta del error 404
  app.use((req, res) => {
    res.status(404).render("error-404");
  });

app.listen(port, () =>
  console.log(`Sitio Web inicializado en htt-://localhost:${port}`)
);
