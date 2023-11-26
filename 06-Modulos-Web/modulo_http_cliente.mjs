import { get } from "https";

const urlSite = {
  hostname: "jeromanp.website",
  port: 443,
  path: "/proyectos",
};

get(urlSite, (res) => {
  console.log(
    `El sitio ${urlSite.hostname} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}.`
  );
}).on("error", (err) => {
  console.error(
    `El sitio ${urlSite.hostname} no ha respondido. Código: ${err.code}. Mensaje: ${err.message}.`
  );
});