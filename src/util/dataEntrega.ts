const dataParaEntrega = async () => {
  const dataAtual = new Date();

  const dataEntrega = new Date(dataAtual.setDate(dataAtual.getDate() + 7));
  console.log(dataEntrega);

  return dataEntrega;
};

export default dataParaEntrega;
