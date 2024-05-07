import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const buscaEmprestimo = async (id: number) => {
  try {
    const emprestimo = await prisma.emprestimo_livro.findUnique({
      where: {
        id: id,
      },
    });

    return emprestimo;
  } catch (error) {
    throw new Error("Erro ao buscar emprestimo.");
  }
};

export default buscaEmprestimo;
