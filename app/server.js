import express from "express";
import puente from "./routes/index.js";

const app = espress();

app.use(express.json());
app.use("/", puente)

export default app;