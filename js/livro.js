const capituloID =
localStorage.getItem("capituloAtual");


async function carregarCapitulo(){

const resposta = await fetch(
`${API_URL}/capitulo/${capituloID}`
);

const capitulo = await resposta.json();

const conteudo =
document.getElementById("conteudo");

conteudo.innerHTML = `

<div class="badge">
${capitulo.disciplina}
</div>

<h1>
Capítulo ${capitulo.numero}
</h1>

<h2>
${capitulo.titulo}
</h2>

<div class="resumo">
${capitulo.resumo}
</div>

<div class="marker">

<h3>
Escaneie o marcador Hiro
</h3>

<img src="assets/hiro.png">

<p>
Aponte a câmera do celular para o marcador
para visualizar a atividade em Realidade Aumentada.
</p>

<button onclick="abrirAR()">
Abrir Atividade AR
</button>

</div>

`;

}


function abrirAR(){

location.href = "ar/atividadeAR.html";

}


carregarCapitulo();