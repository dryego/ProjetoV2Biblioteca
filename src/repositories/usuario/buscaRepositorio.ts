import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const buscaUsuario = async (cpf: string) => {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: {
        cpf: cpf,
      },
    });
    return usuario;
  } catch (error) {
    throw new Error("Erro ao buscar usuario.");
  }
};

export default buscaUsuario;
