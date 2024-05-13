const dataParaEntrega = async () => {
  const dataAtual = new Date();

  const dataEntrega = new Date(dataAtual.setDate(dataAtual.getDate() + 7));

  return dataEntrega;
};

export default dataParaEntrega;
