import experess from "express";
import usuarios from "./models/usuario.js";

const routes = experess.Router();

routes.get("/usuarios", (request, response) => {
    response.json(usuarios);
} );

export default routes;