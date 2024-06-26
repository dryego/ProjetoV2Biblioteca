import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function buscaUsuario(idUsuario: number) {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: idUsuario,
      },
      include: {
        emprestimosLivros: true,
      },
    });
    return usuario;
  } catch (error) {
    throw new Error("Erro ao buscar usuario.");
  }
}
