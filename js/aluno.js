const usuario = JSON.parse(
localStorage.getItem("usuario")
);

if(!usuario){

location.href = "login.html";

}

document.getElementById("titulo").innerText =
"Olá, " + usuario.nome;


// ===============================
// CARREGAR CAPÍTULOS
// ===============================

async function carregarCapitulos(){

const resposta = await fetch(
`${API_URL}/aluno/${usuario.id}/capitulos`
);

const capitulos = await resposta.json();

const lista =
document.getElementById("listaCapitulos");

lista.innerHTML = "";

if(capitulos.length === 0){

lista.innerHTML = `

<div class="card">

<h2>Nenhum capítulo liberado</h2>

<p>
Seu professor ainda não liberou conteúdos.
</p>

</div>

`;

return;

}


// renderizar capítulos

capitulos.forEach(cap => {

lista.innerHTML += `

<div class="card">

<h2>
Capítulo ${cap.numero}
</h2>

<p>
${cap.titulo}
</p>

<p>
Disciplina: ${cap.disciplina}
</p>

<button onclick="abrirLivro(${cap.id})">
Abrir Livro
</button>

<button onclick="abrirAR(${cap.id})">
Abrir AR
</button>

</div>

`;

});


// atualizar progresso

document.getElementById("textoProgresso").innerText =
`Você possui ${capitulos.length} capítulo(s) liberado(s).`;

}


// ===============================
// LIVRO
// ===============================

function abrirLivro(id){

localStorage.setItem(
"capituloAtual",
id
);

location.href = "livro.html";

}


// ===============================
// AR
// ===============================

function abrirAR(id){

localStorage.setItem(
"capituloAtual",
id
);

location.href = "ar/atividadeAR.html";

}


// ===============================
// NAVEGAÇÃO
// ===============================

function mostrar(secao){

document.getElementById("secaoCapitulos")
.style.display = "none";

document.getElementById("secaoProgresso")
.style.display = "none";


if(secao === "capitulos"){

document.getElementById("secaoCapitulos")
.style.display = "block";

}


if(secao === "progresso"){

document.getElementById("secaoProgresso")
.style.display = "block";

}

}


// ===============================
// LOGOUT
// ===============================

function logout(){

localStorage.removeItem("usuario");

location.href = "login.html";

}


// iniciar

carregarCapitulos();