import { cadastroEmprestimo } from "../../repositories/emprestimo/cadastraEmprestimoRepositorio";
import { buscaLivro } from "../../repositories/livro/buscaLivroRepositorio";
import { buscaUsuario } from "../../repositories/usuario/buscaRepositorio";
import dataParaEntrega from "../../util/dataEntrega";

export async function cadastroEmprestimoService(
  idUsuario: number,
  idLivro: number
) {
  const usuario = await buscaUsuario(idUsuario);

  if (usuario === null) {
    return {
      status: 404,
      mensagem: "Usuario não encontrado.",
      data: null,
    };
  } else if (usuario.emprestimosLivros.length >= 3) {
    return {
      status: 404,
      mensagem: "Usuario não pode realizar novos emprestimos",
      data: null,
    };
  }

  const livro = await buscaLivro(idLivro);

  if (livro === null) {
    return {
      status: 404,
      mensagem: "Livro não encontrado.",
      data: null,
    };
  }

  const entregaRealizada: boolean = false;
  const dataEntrega = await dataParaEntrega();

  const novoEmprestimo = await cadastroEmprestimo(
    idUsuario,
    idLivro,
    dataEntrega,
    entregaRealizada
  );

  return {
    status: 200,
    mensagem: "Emprestimo realizado com sucesso.",
    data: novoEmprestimo,
  };
}
