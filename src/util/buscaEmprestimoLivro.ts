import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const buscaEmprestimoLivro = async (idLivro: number) =>
  await prisma.livro.findUnique({
    where: {
      id: idLivro,
    },
    include: {
      emprestimoLivro: true,
    },
  });

export default buscaEmprestimoLivro;
