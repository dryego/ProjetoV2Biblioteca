import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const empretimosUsuario = async (idUsuario: number) => {
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
  const emprestimos = usuario.emprestimosLivros;
  return emprestimos;
};

export default empretimosUsuario;
