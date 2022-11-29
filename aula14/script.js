const apiUrl = "http://localhost:9990/usuarios";

function getUsuarios(apiUrl) {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => show(data))
      .catch((error) => console.log(error));
    }
    
function show(data) {
    let tab = `<tr>
                <th>Nome</th>
                <th>Idade</th>
                </tr>`;
    for (let dados of data) {
        tab += `<tr>
                    <td>${dados.nome} </td>
                    <td>${dados.idade}</td>       
                </tr>`;
    }                  
    document.getElementById("usuarios").innerHTML = tab;
}

function postUsuario(apiUrl, dados) {
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then(() => getUsuarios(apiUrl))
      .catch((error) => console.error("Erro no servidor:", error));
   }   

function cadastraUsuario() {
    const nome = document.getElementById("nomeInputId").value;
    const idade = document.getElementById("idadeInputId").value;
    
    const dados = { nome, idade };
    
    postUsuario(apiUrl, dados);
   }   
       
getUsuarios(apiUrl);
   