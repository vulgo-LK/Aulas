import experess from "express";
import usuariosController from "./controllers/usuariosController.js";

const routes = experess.Router();

routes.get("/usuarios", usuariosController.mostraUsuarios);
routes.post("/usuarios", usuariosController.criaUsuarios);
routes.delete("/usuarios/:id", usuariosController.deletaUsuarios);
routes.get("/usuarios/:id", usuariosController.buscaUsuario);

export default routes;