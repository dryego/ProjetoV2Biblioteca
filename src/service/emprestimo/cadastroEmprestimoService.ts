import { cadastroEmprestimo } from "../../repositories/emprestimo/cadastraEmprestimoRepositorio";
import { buscaLivro } from "../../repositories/livro/buscaLivroRepositorio";
import { buscaUsuario } from "../../repositories/usuario/buscaRepositorio";
import { buscaEmprestimoLivro } from "../../util/buscaEmprestimoLivro";
import dataParaEntrega from "../../util/dataEntrega";

export async function cadastroEmprestimoService(
  idUsuario: number,
  idLivro: number
) {
  console.log(idLivro, idUsuario);

  const usuario = await buscaUsuario(idUsuario);
  const livro = await buscaLivro(idLivro);

  if (!usuario) {
    return { status: 404, mensagem: "Usuário não encontrado.", data: null };
  }

  if (!livro) {
    return { status: 404, mensagem: "Livro não encontrado.", data: null };
  }
  console.log(usuario.emprestimosLivros.length);

  if (usuario.emprestimosLivros.length >= 3) {
    return {
      status: 403,
      mensagem: "Usuário não pode realizar novos empréstimos.",
      data: null,
    };
  }

  const emprestimosAtivos = await buscaEmprestimoLivro(idLivro);
  console.log(emprestimosAtivos);

  if (emprestimosAtivos !== null) {
    return {
      status: 403,
      mensagem: "O livro já está emprestado.",
      data: null,
    };
  }

  const entregaRealizada = false;
  const dataEntrega = await dataParaEntrega();

  const novoEmprestimo = await cadastroEmprestimo(
    idUsuario,
    idLivro,
    dataEntrega,
    entregaRealizada
  );

  return {
    status: 200,
    mensagem: "Empréstimo realizado com sucesso.",
    data: novoEmprestimo,
  };
}
