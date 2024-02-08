// const perguntas = [
//   {
//     pergunta: "Pergunta 01",
//     respostas: ["Resposta A", "Resposta B", "Resposta C"],
//     Correta: 2,
//   },
// ];
const perguntas = [
  {
    pergunta: "Qual é o maior planeta do Sistema Solar?",
    respostas: ["Marte", "Vênus", "Júpiter"],
    correta: 2,
  },
  {
    pergunta: "Qual é o país com a maior área territorial do mundo?",
    respostas: ["Canadá", "Rússia", "China"],
    correta: 1,
  },
  {
    pergunta: "Quem escreveu a obra 'Dom Quixote'?",
    respostas: [
      "Miguel de Cervantes",
      "William Shakespeare",
      "Friedrich Nietzsche",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o elemento químico mais abundante na crosta terrestre?",
    respostas: ["Ferro", "Oxigênio", "Silício"],
    correta: 2,
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    respostas: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
    correta: 0,
  },
  {
    pergunta: "Em que ano a Primeira Guerra Mundial começou?",
    respostas: ["1914", "1918", "1939"],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior oceano da Terra?",
    respostas: ["Atlântico", "Índico", "Pacífico"],
    correta: 2,
  },
  {
    pergunta: "Qual é o símbolo químico do ouro?",
    respostas: ["Ag", "Au", "Fe"],
    correta: 1,
  },
  {
    pergunta: "Quem escreveu 'Romeu e Julieta'?",
    respostas: ["Charles Dickens", "Jane Austen", "William Shakespeare"],
    correta: 2,
  },
  {
    pergunta: "Quantos continentes existem no mundo?",
    respostas: ["4", "6", "7"],
    correta: 2,
  },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size = "de" + totalDePerguntas;

// Loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta" + perguntas.indexOf(item)
    );
    dt.querySelector("input").value = item.respostas.indexOf(resposta);
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;
      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
    };
    quizItem.querySelector("dl").appendChild(dt);
  }

  // remove o texto "pergunta A"
  quizItem.querySelector("dl dt").remove();

  // coloca a pergunta ne tela
  quiz.append(quizItem);
}
