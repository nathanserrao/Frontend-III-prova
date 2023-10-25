import React from 'react';

function Pergunta({ pergunta, opcoes, aoSelecionar }) {
  return (
    <div>
      <h2>{pergunta}</h2>
      <ul>
        {opcoes.map((opcao) => (
          <li key={opcao}>
            <button onClick={() => aoSelecionar(opcao)}>{opcao}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pergunta;