import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function cadastroLivroRepositorio(
  id: number,
  titulo: string,
  anoPublicacao: number
) {
  try {
    const livro = await prisma.livro.create({
      data: {
        id: id,
        titulo: titulo,
        anoPublicacao: anoPublicacao,
      },
    });
  } catch (error) {
    throw new Error("Erro ao cadastra livro.");
  }
}
