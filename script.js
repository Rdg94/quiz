// const perguntas = [
//   {
//     pergunta: "Pergunta 01",
//     respostas: ["Resposta A", "Resposta B", "Resposta C"],
//     Correta: 2,
//   },
// ];

const perguntas = [
  {
    pergunta: "Qual é o nome completo do protagonista da série Naruto?",
    respostas: ["Naruto Uzumaki", "Naruto Namikaze", "Naruto Senju"],
    correta: 0,
  },
  {
    pergunta: "Quem é o sensei de Naruto?",
    respostas: ["Kakashi Hatake", "Jiraiya", "Orochimaru"],
    correta: 0,
  },
  {
    pergunta: "Qual é o nome do vilão principal da série?",
    respostas: ["Madara Uchiha", "Obito Uchiha", "Kaguya Ootsutsuki"],
    correta: 0,
  },
  {
    pergunta: "Qual é a vila de origem de Naruto?",
    respostas: ["Vila da Folha", "Vila da Areia", "Vila da Névoa"],
    correta: 0,
  },
  {
    pergunta: "Qual é o nome do jutsu mais famoso de Naruto?",
    respostas: ["Rasengan", "Chidori", "Kamehameha"],
    correta: 0,
  },
  {
    pergunta: "Quem é o melhor amigo de Naruto?",
    respostas: ["Sasuke Uchiha", "Shikamaru Nara", "Neji Hyuga"],
    correta: 0,
  },
  {
    pergunta: "Qual é o nome do professor de Naruto na Academia Ninja?",
    respostas: ["Iruka Umino", "Gai Maito", "Asuma Sarutobi"],
    correta: 0,
  },
  {
    pergunta: "Qual é o nome do clã de Sasuke?",
    respostas: ["Clã Uchiha", "Clã Hyuga", "Clã Senju"],
    correta: 0,
  },
  {
    pergunta: "Quem é o líder da Akatsuki?",
    respostas: ["Pain", "Itachi Uchiha", "Kisame Hoshigaki"],
    correta: 0,
  },
  {
    pergunta: "Qual é o nome do exame realizado para se tornar um Chunin?",
    respostas: ["Exame Chunin", "Exame Genin", "Exame Jonin"],
    correta: 0,
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
