
const abrirCarta = document.getElementById("abrirCarta");
const carta = document.getElementById("carta");
const memorias = document.getElementById("memorias");
const interativo = document.getElementById("interativo");
const final = document.getElementById("final");

function mostrar(elemento) {
    elemento.classList.remove("escondido");
    elemento.classList.add("mostrar");
}

function irPara(elemento) {
    elemento.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Abrir a carta
abrirCarta.addEventListener("click", function () {
    mostrar(carta);

    abrirCarta.innerHTML = `
        <span class="selo">♥</span>
        <span class="texto-envelope">Carta aberta!</span>
        <span class="clique">feita para você ♡</span>
    `;

    abrirCarta.disabled = true;
    abrirCarta.style.cursor = "default";

    setTimeout(function () {
        irPara(carta);
    }, 200);
});

// Ir para as lembranças
document.getElementById("irMemorias").addEventListener("click", function () {
    mostrar(memorias);
    mostrar(interativo);
    mostrar(final);

    setTimeout(function () {
        irPara(memorias);
    }, 100);
});

// Respostas para cada escolha
const opcoes = document.querySelectorAll(".opcao");
const mensagemResposta = document.getElementById("mensagemResposta");

opcoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        mensagemResposta.textContent = botao.dataset.msg;

        mostrar(mensagemResposta);
    });
});

// A última mensagem
document.getElementById("botaoFinal").addEventListener("click", function () {
    const ultimaMensagem = document.getElementById("ultimaMensagem");

    mostrar(ultimaMensagem);

    this.textContent = "Um abraço cheio de carinho ❤️";
    this.disabled = true;

    irPara(ultimaMensagem);
});

// Corações flutuando no fundo
const fundoCoracoes = document.getElementById("hearts");

function criarCoracao() {
    const coracao = document.createElement("span");

    coracao.classList.add("heart");
    coracao.textContent = Math.random() > 0.5 ? "♡" : "♥";

    coracao.style.left = Math.random() * 100 + "%";
    coracao.style.fontSize = (12 + Math.random() * 18) + "px";
    coracao.style.animationDuration = (6 + Math.random() * 6) + "s";

    fundoCoracoes.appendChild(coracao);

    setTimeout(function () {
        coracao.remove();
    }, 12000);
}

setInterval(criarCoracao, 700);
