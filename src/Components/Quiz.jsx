import React, { useState } from 'react';

const perguntas = [
  {
    pergunta: 'O que é React?',
    opcoes: ['A. Um framework JavaScript', 'B. Uma biblioteca JavaScript', 'C. Uma linguagem de programação', 'D. Um banco de dados'],
    respostaCorreta: 'B. Uma biblioteca JavaScript',
  },
  {
    pergunta: 'O que é JSX?',
    opcoes: ['A. JavaScript XML', 'B. JavaScript eXtended', 'C. JSON com XML', 'D. Extensão de Sintaxe JavaScript'],
    respostaCorreta: 'A. JavaScript XML',
  },
  {
    pergunta: 'Qual é a vantagem do Virtual DOM no React?',
    opcoes: ['A. Melhor desempenho', 'B. Facilita o desenvolvimento', 'C. Maior compatibilidade com navegadores antigos', 'D. Melhor suporte para CSS'],
    respostaCorreta: 'A. Melhor desempenho',
  },
  {
    pergunta: 'O que é um componente controlado em React?',
    opcoes: ['A. Um componente que toma suas próprias decisões', 'B. Um componente que usa classes em vez de funções', 'C. Um componente cujo estado é controlado pelo React', 'D. Um componente que não pode ser renderizado'],
    respostaCorreta: 'C. Um componente cujo estado é controlado pelo React',
  },
];

function Quiz() {
  const [respostas, setRespostas] = useState(Array(perguntas.length).fill(''));
  const [exibirResultado, setExibirResultado] = useState(false);

  const Selecionar = (opcaoSelecionada, indicePergunta) => {
    const novasRespostas = [...respostas];
    novasRespostas[indicePergunta] = opcaoSelecionada;
    setRespostas(novasRespostas);
  };

  const calcularNota = () => {
    return respostas.reduce((nota, resposta, indice) => {
      return resposta === perguntas[indice].respostaCorreta ? nota + 1 : nota;
    }, 0);
  };

  const nota = calcularNota();

  return (
    <div>
      {perguntas.map((pergunta, indice) => (
        <div key={indice}>
          <p>{pergunta.pergunta}</p>
          <ul>
            {pergunta.opcoes.map((opcao) => (
              <li key={opcao}>
                <label>
                  <input
                    type="radio"
                    name={`pergunta${indice}`}
                    value={opcao}
                    checked={respostas[indice] === opcao}
                    onChange={() => Selecionar(opcao, indice)}
                    disabled={exibirResultado}
                  />
                  {opcao}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={() => setExibirResultado(true)}>Ver Resultado</button>
      {exibirResultado && (
        <div>
          <p>Quiz concluído! Sua nota é {nota} de {perguntas.length}.</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
