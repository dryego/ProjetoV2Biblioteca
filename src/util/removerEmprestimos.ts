import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const removerEmpretimos = async (idUsuario: number) => {
  const usuario = await prisma.usuario.findFirst({
    where: {
      id: idUsuario,
    },
    include: {
      emprestimosLivros: true,
    },
  });

  if (!usuario) {
    throw new Error("Usuario nao encontrado.");
  }

  const emprestimo = usuario.emprestimosLivros;

  return emprestimo;
};

export default removerEmpretimos;
