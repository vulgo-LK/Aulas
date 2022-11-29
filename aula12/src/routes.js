import experess from "express";
import usuariosController from "./controllers/usuariosController.js";

const routes = experess.Router();

routes.get("/usuarios", usuariosController.mostraUsuarios);

export default routes;