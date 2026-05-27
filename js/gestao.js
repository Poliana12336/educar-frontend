const usuario =
JSON.parse(localStorage.getItem("usuario"));


// ==========================
// NAVEGAÇÃO
// ==========================

function mostrar(secao){

document.getElementById("secaoUsuarios")
.style.display = "none";

document.getElementById("secaoTurmas")
.style.display = "none";


if(secao === "usuarios"){

document.getElementById("secaoUsuarios")
.style.display = "block";

}

if(secao === "turmas"){

document.getElementById("secaoTurmas")
.style.display = "block";

}

}


// ==========================
// LOGOUT
// ==========================

function logout(){

localStorage.removeItem("usuario");

location.href = "login.html";

}


// ==========================
// CRIAR USUÁRIO
// ==========================

async function criarUsuario(){

const nome =
document.getElementById("nome").value;

const email =
document.getElementById("email").value;

const senha =
document.getElementById("senha").value;

const role =
document.getElementById("role").value;


await fetch(`${API_URL}/users`, {

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
nome,
email,
senha,
role
})

});

alert("Usuário criado!");

listarUsuarios();

}


// ==========================
// LISTAR USUÁRIOS
// ==========================

async function listarUsuarios(){

const resposta =
await fetch(`${API_URL}/users`);

const usuarios =
await resposta.json();

const lista =
document.getElementById("listaUsuarios");

lista.innerHTML = "";


usuarios.forEach(user => {

lista.innerHTML += `

<div class="card">

<h3>${user.nome}</h3>

<p>${user.email}</p>

<p>Role: ${user.role}</p>

</div>

`;

});

}


// ==========================
// CRIAR TURMA
// ==========================

async function criarTurma(){

const nome =
document.getElementById("nomeTurma").value;

await fetch(`${API_URL}/turmas`, {

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
nome
})

});

alert("Turma criada!");

listarTurmas();

}


// ==========================
// LISTAR TURMAS
// ==========================

async function listarTurmas(){

const resposta =
await fetch(`${API_URL}/turmas`);

const turmas =
await resposta.json();

const lista =
document.getElementById("listaTurmas");

lista.innerHTML = "";


turmas.forEach(turma => {

lista.innerHTML += `

<div class="card">

<h3>${turma.nome}</h3>

</div>

`;

});

}


listarUsuarios();
listarTurmas();