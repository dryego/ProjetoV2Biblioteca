import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const quantidadeEmpretimos = async (idUsuario: number) => {
  const usuario = await prisma.usuario.findUnique({
    where: {
      id: idUsuario,
    },
    include: {
      emprestimosLivros: true,
    },
  });

  if (!usuario) {
    throw new Error("Usuario nao encontrado");
  }

  const quantidade = usuario?.emprestimosLivros.length;

  return quantidade;
};

export default quantidadeEmpretimos;
