import usuarios from "../models/usuario.js";
 
function mostraUsuarios(request, response) {
 response.json(usuarios);
}

function criaUsuarios(request, response) {
    usuarios.push(request.body);
    response.json(request.body);
}

function deletaUsuarios(request, response) {
    const id = request.params.id;
    usuarios[id] = null;
    response.json({mensagem: "Usuário Deletado"});   
}

function buscaUsuario(request, response) {
    const id = request.params.id;
    response.json(usuarios[id]);
}   
 
export default { mostraUsuarios, criaUsuarios, deletaUsuarios, buscaUsuario };