import express, { json } from "express";
import routes from "./routes.js";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors())
app.use(routes);

app.listen(9990, console.log("Servidor Rodando"));