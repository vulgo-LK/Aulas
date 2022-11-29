import usuarios from "../models/usuario.js";
 
function mostraUsuarios(request, response) {
 response.json(usuarios);
}
 
export default { mostraUsuarios };