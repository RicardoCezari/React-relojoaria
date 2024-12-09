import React, { useState } from 'react';

const EmissaoNota = () => {
  const [servico, setServico] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Emissão de Nota:', { servico, valor });
  };

  return (
    <div className="p-6 bg-red-50">
      <h1 className="text-3xl text-center font-semibold text-red-600">Emissão de Nota de Serviço</h1>
      <form onSubmit={handleSubmit} className="mt-4 max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-lg" htmlFor="servico">Serviço Realizado</label>
          <input
            id="servico"
            type="text"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg" htmlFor="valor">Valor</label>
          <input
            id="valor"
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 mt-4 bg-red-500 text-white rounded">Emitir Nota</button>
      </form>
    </div>
  );
};

export default EmissaoNota;
