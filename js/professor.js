const usuario =
JSON.parse(localStorage.getItem("usuario"));


// ==========================
// NAVEGAÇÃO
// ==========================

function mostrar(secao){

document.getElementById("secaoCapitulos")
.style.display = "none";

document.getElementById("secaoLiberar")
.style.display = "none";


if(secao === "capitulos"){

document.getElementById("secaoCapitulos")
.style.display = "block";

}

if(secao === "liberar"){

document.getElementById("secaoLiberar")
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
// LISTAR CAPÍTULOS
// ==========================

async function listarCapitulos(){

const resposta =
await fetch(`${API_URL}/capitulos`);

const capitulos =
await resposta.json();

const lista =
document.getElementById("listaCapitulos");

lista.innerHTML = "";


capitulos.forEach(cap => {

lista.innerHTML += `

<div class="card">

<h2>
Capítulo ${cap.numero}
</h2>

<p>${cap.titulo}</p>

<p>${cap.disciplina}</p>

</div>

`;

});

}


// ==========================
// LIBERAR
// ==========================

async function liberarCapitulo(){

const turma_id =
document.getElementById("turmaID").value;

const capitulo_id =
document.getElementById("capituloID").value;


await fetch(
`${API_URL}/liberar?professor_id=${usuario.id}&turma_id=${turma_id}&capitulo_id=${capitulo_id}`,
{
method:"POST"
}
);

alert("Capítulo liberado!");

}


listarCapitulos();