import { cadastroEmprestimo } from "../../repositories/emprestimo/cadastraEmprestimoRepositorio";
import { buscaLivro } from "../../repositories/livro/buscaLivroRepositorio";
import { buscaUsuario } from "../../repositories/usuario/buscaRepositorio";
import dataParaEntrega from "../../util/dataEntrega";
import { entregaLivro } from "../../util/entregaLivro";

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
  }
  console.log(usuario.emprestimosLivros.length);

  if (usuario.emprestimosLivros.length >= 3) {
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

  const emprestimoAtivo = livro.emprestimoLivro.some(
    (emprestimo) => emprestimo.entregaRealizada
  );
  console.log(livro.emprestimoLivro);

  console.log(emprestimoAtivo);
  if (emprestimoAtivo) {
    return {
      status: 404,
      mensagem: "O livro nao pode ser emprestado.",
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
