import {Router} from "express";
import {mostrar, listar, crear, modificar, eliminar} from "../controllers/controllers.js"

const ruta = Router();

ruta.get("/mostrar/:id", mostrar)
ruta.get("/listar", listar)
ruta.post("/crear", crear)
ruta.put("/modificar", modificar)
ruta.delete("/eliminar", eliminar)

export default ruta;