import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function buscaLivro(id: number) {
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
}
