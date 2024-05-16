import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function buscaEmprestimoLivro(idLivro: number) {
  const buscaEmprestimoLivro = await prisma.emprestimo_livro.findFirst({
    where: {
      livroId: idLivro,
    },
  });

  return buscaEmprestimoLivro;
}
