import { PrismaClient } from "@prisma/client";
import Livro from "../../model/livro";

const prisma = new PrismaClient();

const cadastroLivroRepositorio = async (
  id: number,
  titulo: string,
  anoPublicacao: number
) => {
  try {
    const novoLivro = new Livro(id, titulo, anoPublicacao);
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
};

export default cadastroLivroRepositorio;
