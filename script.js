const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1 - Quem tem mais títulos na F1?",
        alternativas: [
            {
                texto: "Lewis Hamilton",
                afirmacao: "1 - Lewis Hamilton detém o recorde de 7 títulos mundiais, empatado com Michael Schumacher. Hamilton conquistou seus títulos em 2008, 2014, 2015, 2017, 2018, 2019 e 2020."
            },
            {
                texto: "Sebastian Vettel",
                afirmacao: "1 - Sebastian Vettel tem 4 títulos mundiais, conquistados em 2010, 2011, 2012 e 2013 com a equipe Red Bull Racing."
            }
        ]
    },
    {
        enunciado: "2 - Qual é o circuito mais velho da F1?",
        alternativas: [
            {
                texto: "Mônaco",
                afirmacao: "2 - Embora o Circuit de Monaco seja um dos circuitos mais icônicos e antigos, tendo sua primeira corrida em 1929 e sendo parte do campeonato mundial desde 1950, Silverstone é tecnicamente mais antigo no contexto do campeonato mundial da F1."
            },
            {
                texto: "Silverstone",
                afirmacao: "2 - O Circuit de Monaco é icônico e antigo, mas Silverstone foi o local do primeiro Grande Prêmio oficial da Fórmula 1 em 1950."
            }
        ]
    },
    {
        enunciado: "3 - Quem foi o primeiro brasileiro a ganhar um mundial de F1?",
        alternativas: [
            {
                texto: "Ayrton Senna",
                afirmacao: "3 - Ayrton Senna, embora seja um dos pilotos mais famosos e talentosos da história, ganhou seu primeiro título mundial mais tarde, em 1988."
            },
            {
                texto: "Emerson Fittipaldi",
                afirmacao: "3 - Ele venceu seu primeiro campeonato em 1972."
            }
        ]
    },
    {
        enunciado: "4 - Qual equipe tem mais títulos de construtores na F1?",
        alternativas: [
            {
                texto: "Ferrari",
                afirmacao: "4 - A Scuderia Ferrari detém o recorde de mais campeonatos de construtores na Fórmula 1, com um total de 16 títulos"
            },
            {
                texto: "Mercedes",
                afirmacao: "4 - A equipe Mercedes-AMG Petronas é extremamente bem-sucedida, especialmente na era híbrida a partir de 2014, mas tem menos títulos de construtores do que a Ferrari."
            }
        ]
    },
    {
        enunciado: "5 - Qual é o GP mais longo em tempo de duração na F1?",
        alternativas: [
            {
                texto: "Mônaco",
                afirmacao: "5 - O GP de Mônaco, embora seja um dos mais desafiadores e icônicos, geralmente tem uma duração menor em comparação com Singapura, devido ao menor comprimento da pista e, consequentemente, menos voltas."
            },
            {
                texto: "Singapura",
                afirmacao: "5 - O GP de Singapura é conhecido por ser o mais longo em termos de duração de tempo devido ao circuito urbano e às condições noturnas. "
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
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
