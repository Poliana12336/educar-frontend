async function login(){

const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

const resposta = await fetch(
`${API_URL}/login?email=${email}&senha=${senha}`,
{
method:"POST"
}
);

const usuario = await resposta.json();

if(usuario.erro){

alert(usuario.erro);
return;

}

localStorage.setItem(
"usuario",
JSON.stringify(usuario)
);

if(usuario.role === "aluno"){

location.href = "dashboard-aluno.html";

}

if(usuario.role === "professor"){

location.href = "dashboard-professor.html";

}

if(usuario.role === "gestao"){

location.href = "dashboard-gestao.html";

}

}