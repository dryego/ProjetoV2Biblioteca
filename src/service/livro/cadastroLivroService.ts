import { buscaLivro } from "../../repositories/livro/buscaLivroRepositorio";
import { cadastroLivroRepositorio } from "../../repositories/livro/cadastroLivroRepositorio";

export async function cadastroLivroService(
  id: number,
  titulo: string,
  anoPublicacao: number
) {
  const livro = await buscaLivro(id);

  if (livro !== null) {
    return {
      status: 404,
      mensagem: "Livro já cadastrado.",
      data: null,
    };
  }

  const novoLivro = await cadastroLivroRepositorio(id, titulo, anoPublicacao);

  return {
    status: 200,
    mensagem: "Livro cadastrado com sucesso.",
    data: novoLivro,
  };
}
