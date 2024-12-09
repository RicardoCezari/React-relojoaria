import React, { useState } from 'react';

const ConsertoRelogios = () => {
  const [modelo, setModelo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Conserto de relógio:', { modelo, descricao });
  };

  return (
    <div className="p-6 bg-blue-50">
      <h1 className="text-3xl text-center font-semibold text-blue-600">Cadastro de Conserto de Relógio</h1>
      <form onSubmit={handleSubmit} className="mt-4 max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-lg" htmlFor="modelo">Modelo do Relógio</label>
          <input
            id="modelo"
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg" htmlFor="descricao">Descrição do Conserto</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white rounded">Cadastrar Conserto</button>
      </form>
    </div>
  );
};

export default ConsertoRelogios;
