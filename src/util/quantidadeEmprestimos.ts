import { buscaLivro } from "../repositories/livro/buscaLivroRepositorio";

export async function quantidadeEmpretimos(idlivro: number): Promise<number> {
  const livroEmprestimo = await buscaLivro(idlivro);
  if (!livroEmprestimo) {
    return -1;
  }

  return livroEmprestimo.emprestimoLivro.length;
}
