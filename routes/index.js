import {routes} from "express";
import ruta from "./routes.estudiante.js";

const puente = Router();

puente.use("/api", ruta);

export default puente;

