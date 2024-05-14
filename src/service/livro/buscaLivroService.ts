import { buscaLivro } from "../../repositories/livro/buscaLivroRepositorio";

export async function buscaLivroService(id: number) {
  const livro = await buscaLivro(id);
  if (livro === null) {
    return {
      status: 404,
      mensagem: "Livro nao encontrado.",
      data: null,
    };
  }
  return {
    status: 200,
    mensagem: "Livro encontrado com sucesso.",
    data: livro,
  };
}
