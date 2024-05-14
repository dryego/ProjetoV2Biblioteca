import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const cadastroEmprestimo = async (
  idLivro: number,
  idUsuario: number,
  dataEntrega: Date,
  entregaRealizada: boolean
) => {
  try {
    const novoEmprestimo = await prisma.emprestimo_livro.create({
      data: {
        livroId: idLivro,
        usuarioId: idUsuario,
        dataDeEntrega: dataEntrega,
        entregaRealizada: entregaRealizada,
      },
    });
    return novoEmprestimo;
  } catch (error) {
    throw new Error("Erro ao cadastra emprestimo.");
  }
};
export default cadastroEmprestimo;
