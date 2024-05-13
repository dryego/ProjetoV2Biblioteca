import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const devolucaoEmprestimo = async (idEmprestimo: number) => {
  try {
    await prisma.emprestimo_livro.delete({
      where: {
        id: idEmprestimo,
      },
    });
    return { mensagem: "Livro devolvido com sucesso." };
  } catch (error) {
    console.log(error);

    throw new Error("Erro ao devolver Emprestimo.");
  }
};

export default devolucaoEmprestimo;
