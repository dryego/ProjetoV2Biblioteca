import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const buscaLivro = async (id: number) => {
  try {
    const livro = await prisma.livro.findUnique({
      where: {
        id: id,
      },
    });
    return livro;
  } catch (error) {
    throw new Error("Erro ao buscar livro.");
  }
};

export default buscaLivro;
