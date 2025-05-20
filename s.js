<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Gerador Aleatório</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f2f5;
      text-align: center;
      padding: 30px;
    }
    button {
      margin: 8px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
    #output {
      margin-top: 30px;
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      display: inline-block;
      max-width: 600px;
    }
  </style>
</head>
<body>

  <h1>Gerador Aleatório</h1>

  <button onclick="gerarNome()">Gerar Nome</button>
  <button onclick="contarPiada()">Contar Piada</button>
  <button onclick="mostrarCuriosidade()">Curiosidade</button>
  <button onclick="darIdeia()">Ideia Criativa</button>
  <button onclick="darElogio()">Elogio</button>
  <button onclick="mostrarFraseMotivacional()">Motivacional</button>
  <button onclick="mostrarFatoHistorico()">Fato Histórico</button>
  <button onclick="mostrarFraseDeFilme()">Frase de Filme</button>
  <button onclick="mostrarPalavraInventada()">Palavra Inventada</button>
  <button onclick="jogarJogo()">Jogar Jogo</button>
  <button onclick="responderPergunta()">Pergunta</button>

  <div id="output"></div>

  <script>
    const data = {
      nomes: [
        "Lumirox", "Zenthar", "Voltazen", "Cryptonix", "Nebulus",
        "Argonel", "Xendor", "Miralune", "Thalor", "Aurelius",
        "Zylvian", "Kronel", "Feyra", "Vortan", "Iskandar",
        "Nyxora", "Velatrix", "Ornaxis", "Dralgor", "Seraphon"
      ],
      piadas: [
        "Por que o computador foi ao médico? Porque ele estava com um vírus!",
        "O que o zero disse pro oito? Belo cinto!",
        "Qual o cúmulo do azar? Ser atropelado por um carro de autoescola.",
        "Por que a vaca foi para o espaço? Para visitar a Via Láctea.",
        "O que é um ponto vermelho no canto da sala? Uma formiga com dor de dente.",
        "Por que o livro foi ao terapeuta? Porque ele tinha muitos problemas encadernados.",
        "Como o elétron atende o telefone? Próton?!",
        "Por que o jacaré tirou o filho da escola? Porque ele réptil de ano.",
        "O que a banana disse para o cachorro? Nada, banana não fala.",
        "Por que o lápis está sempre feliz? Porque ele tem uma ponta de esperança."
      ],
      curiosidades: [
        "O polvo tem três corações.",
        "Abacaxis levam dois anos para crescer.",
        "O mel nunca estraga.",
        "O Monte Everest cresce cerca de 4 mm por ano.",
        "As girafas não têm cordas vocais.",
        "A água-viva Turritopsis dohrnii é considerada biologicamente imortal.",
        "Existem mais estrelas no universo do que grãos de areia na Terra.",
        "O DNA humano é 60% igual ao de uma banana.",
        "A Antártida é o maior deserto do mundo.",
        "O relâmpago é cinco vezes mais quente que a superfície do sol."
      ],
      ideias: [
        "Crie um app de desafios diários!",
        "Desenvolva um site de piadas colaborativas.",
        "Monte uma lista de músicas para foco total.",
        "Escreva uma história interativa onde o leitor decide os caminhos.",
        "Crie um gerador automático de elogios.",
        "Desenvolva um simulador de universos fictícios.",
        "Plataforma de idiomas com memes e músicas.",
        "Mapa interativo de curiosidades do mundo.",
        "App que dá um conselho filosófico por dia.",
        "Jogo educativo com fatos históricos divertidos."
      ],
      elogios: [
        "Você tem um brilho único!",
        "Sua criatividade é impressionante.",
        "Você faz o mundo mais leve só com sua presença.",
        "Seu jeito de pensar é genial.",
        "Você é incrível em tudo que faz.",
        "Sua energia é contagiante!",
        "Você inspira quem está à sua volta.",
        "Sua inteligência ilumina qualquer conversa.",
        "Seu talento é admirável.",
        "Você tem um coração gigante."
      ],
      frases_motivacionais: [
        "Você é mais forte do que imagina.",
        "Não desista, o próximo passo pode ser a virada.",
        "Grandes jornadas começam com pequenos passos.",
        "Você nasceu para brilhar.",
        "Cada dia é uma nova chance.",
        "Acredite em você mesmo.",
        "O sucesso é a soma de pequenos esforços.",
        "Tudo o que você precisa já está em você.",
        "Transforme obstáculos em combustível.",
        "A vida recompensa quem insiste."
      ],
      fatos_historicos: [
        "Em 1969, o homem pisou na Lua pela primeira vez.",
        "A Revolução Francesa começou em 1789.",
        "O Império Romano durou mais de 500 anos.",
        "A primeira guerra mundial começou em 1914.",
        "O Titanic afundou em 1912.",
        "Albert Einstein publicou a Teoria da Relatividade em 1905.",
        "O Brasil se tornou independente em 1822.",
        "A internet nasceu a partir de um projeto militar em 1969.",
        "A Segunda Guerra Mundial terminou em 1945.",
        "A primeira vacina foi criada em 1796 por Edward Jenner."
      ],
      frases_de_filmes: [
        "Que a força esteja com você. – Star Wars",
        "Até o infinito... e além! – Toy Story",
        "Eu sou o rei do mundo! – Titanic",
        "A vida é como uma caixa de chocolates. – Forrest Gump",
        "Por que tão sério? – Batman: O Cavaleiro das Trevas",
        "Vou fazer uma oferta que ele não poderá recusar. – O Poderoso Chefão",
        "Ninguém põe a Baby num canto. – Dirty Dancing",
        "Meu precioso... – O Senhor dos Anéis",
        "Carpe diem. Aproveite o dia. – Sociedade dos Poetas Mortos",
        "Não há lugar como o nosso lar. – O Mágico de Oz"
      ],
      palavras_inventadas: [
        "Hung: fome extrema acompanhada de inquietação criativa.",
        "Alteir: almoçar de forma relaxante e leve.",
        "Sposon: salada refrescante com vegetais crocantes.",
        "Freshin: algo ou alguém extremamente fresco e agradável.",
        "Baura: qualidade de algo muito bom ou excelente.",
        "Zemol: sensação de paz durante uma tempestade.",
        "Tarkun: cheiro de livro novo.",
        "Mirzul: brilho misterioso nos olhos de alguém feliz.",
        "Flarnic: vontade súbita de dançar sozinho.",
        "Trivil: som reconfortante da chuva ao fundo."
      ]
    };

    function pegarAleatorio(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    function gerarNome() {
      mostrarResultado("Nome Gerado:", pegarAleatorio(data.nomes));
    }

    function contarPiada() {
      mostrarResultado("Piada:", pegarAleatorio(data.piadas));
    }

    function mostrarCuriosidade() {
      mostrarResultado("Curiosidade:", pegarAleatorio(data.curiosidades));
    }

    function darIdeia() {
      mostrarResultado("Ideia Criativa:", pegarAleatorio(data.ideias));
    }

    function darElogio() {
      mostrarResultado("Elogio:", pegarAleatorio(data.elogios));
    }

    function mostrarFraseMotivacional() {
      mostrarResultado("Frase Motivacional:", pegarAleatorio(data.frases_motivacionais));
    }

    function mostrarFatoHistorico() {
      mostrarResultado("Fato Histórico:", pegarAleatorio(data.fatos_historicos));
    }

    function mostrarFraseDeFilme() {
      mostrarResultado("Frase de Filme:", pegarAleatorio(data.frases_de_filmes));
    }

    function mostrarPalavraInventada() {
      mostrarResultado("Palavra Inventada:", pegarAleatorio(data.palavras_inventadas));
    }

    function jogarJogo() {
      const numeroSecreto = Math.floor(Math.random() * 10) + 1;
      const palpite = prompt("Jogue! Adivinhe um número entre 1 e 10:");
      if (palpite === null) {
        mostrarResultado("Jogo cancelado.", "");
        return;
      }
      const numero = parseInt(palpite, 10);
      if (numero === numeroSecreto) {
        mostrarResultado("Parabéns!", "Você acertou o número secreto!");
      } else {
        mostrarResultado("Ops!", `Errado. O número era ${numeroSecreto}.`);
      }
    }

    function responderPergunta() {
      const pergunta = prompt("Faça sua pergunta:");
      if (!pergunta || pergunta.trim() === "") {
        mostrarResultado("Pergunta não feita.", "Tente novamente.");
        return;
      }
      const respostas = [
        "Sim!", "Não.", "Talvez.", "Com certeza!", "Provavelmente não.",
        "Claro que sim!", "Duvido.", "Sem dúvidas!", "Ainda não sei.", "Definitivamente!"
      ];
      mostrarResultado("Resposta:", pegarAleatorio(respostas));
    }

    function mostrarResultado(titulo, conteudo) {
      const output = document.getElementById("output");
      output.innerHTML = `<h2>${titulo}</h2><p>${conteudo}</p>`;
    }
  </script>

</body>
</html>
