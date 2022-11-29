function getUsuarios() {
    fetch("http://localhost:9990/usuarios")
        .then(response => response.json())
        .then((data) => {
            show(data);
        })
        .catch((error) => {
            console.log(error);
        });
}
 
function postUsuario() {
    let nome = document.getElementById("nomeId").value;
    let idade = document.getElementById("idadeId").value;
    let novoUsuario = {
        nome: nome,
        idade: idade
    }
 
    fetch("http://localhost:9990/usuarios", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoUsuario),
    })
    .then(response => response.json())
    .then((data) => {
        getUsuarios();
      })
    .catch((error) => {
        console.error('Error:', error);
    })
}
 
function show(data) {
    let tab =
        `<tr>
          <th>Nome</th>
          <th>Idade</th>
         </tr>`;
   
    for (let f of data) {
        tab +=
            `<tr>
                <td>${f.nome} </td>
                <td>${f.idade}</td>        
            </tr>`;
    }
   
    document.getElementById("employees").innerHTML = tab;
}
 
getUsuarios();