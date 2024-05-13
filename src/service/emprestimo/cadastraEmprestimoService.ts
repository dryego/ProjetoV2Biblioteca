import cadastroEmprestimo from "../../repositories/emprestimo/cadastraEmprestimoRepositorio";
import buscaLivro from "../../repositories/livro/buscaLivroRepositorio";
import dataParaEntrega from "../../util/dataEntrega";
import empretimosUsuario from "../../util/emprestimosUsuario";

const cadastraEmprestimoService = async (
  idLivro: number,
  idUsuario: number
) => {
  const livro = await buscaLivro(idLivro);

  if (!livro) {
    return "Livro não encontrado.";
  }

  const emprestimosExistentes = await empretimosUsuario(idUsuario);

  if (emprestimosExistentes.length > 3) {
    return "O usuario não pode realizar novos emprestimos.";
  }
  const dataEntrega = await dataParaEntrega();
  const entregaRealizada: boolean = false;
  await cadastroEmprestimo(idUsuario, idLivro, dataEntrega, entregaRealizada);

  return "Emprestimo realizado com sucesso.";
};

export default cadastraEmprestimoService;
