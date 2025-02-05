/* eslint-disable react/display-name */
import React, { useState, useCallback } from 'react';

const Filho = React.memo(({ dado, atualizarDado }) => {
  const handleClick = () => {
    atualizarDado(dado.id, 'novo valor');
  };

  console.log('Renderizando Filho:', dado.id);

  return (
    <div>
      <p>{dado.valor}</p>
      <button onClick={handleClick}>Atualizar</button>
    </div>
  );
});

const Pai = () => {
  const [dados, setDados] = useState([
    { id: 1, valor: 'dado 1' },
    { id: 2, valor: 'dado 2' },
  ]);

  const atualizarDado = useCallback((id, novoValor) => {
    setDados((prevDados) =>
      prevDados.map((dado) =>
        dado.id === id ? { ...dado, valor: novoValor } : dado
      )
    );
  }, []);

  console.log('Renderizando Pai');

  return (
    <div>
      {dados.map((dado) => (
        <Filho key={dado.id} dado={dado} atualizarDado={atualizarDado} />
      ))}
    </div>
  );
};

export default Pai;