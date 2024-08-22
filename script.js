const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com a imersão cada vez maior da tecnologia na vida social da população, a busca por jogos digitais como forma de distração é cada vez maior, sejam eles jogados em diversas plataformas e de diversos jeitos como celulares, computadores, consoles, em equipes ou individuais.VC PREFERE jogar jogos individuais ou em equipe",
        alternativas: [
            {
                texto: "jogos individuais",
                afirmacao: "JOGOS INDIVIDUAIS vc tem mais facilidade em jogos individuais e não curte muito jogar em equipes "
            },
            {
                texto: "em equipe",
                afirmacao: "EM EQUIPE vc gosta de jogar com seus amigos e jogar com comunicação"
            }
        ]
    },
    {
        enunciado: "Vocẽ prefere jogos digitais ou brincadeiras",
        alternativas: [
            {
                texto: "jogos digitais",
                afirmacao: "Voce prefere algo mais em casa e online -"
            },
            {
                texto: "brincadeiras",
                afirmacao: "Voce gosta de interagir com seus amigos"
            }
        ]
    },
    {
        enunciado: "Voce gosta de jogar sério ou só por diversão",
        alternativas: [
            {
                texto: "jogar sério",
                afirmacao: "Voce é uma pessoa que gosta de ganhar"
            },
            {
                texto: "só por diversão",
                afirmacao: "gosta de algo mais casual"
            }
        ]
    },
   
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
