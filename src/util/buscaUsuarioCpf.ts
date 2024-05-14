import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function buscausuarioCpf(cpf: string) {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: {
        cpf: cpf,
      },
    });
    return usuario;
  } catch (error) {
    throw new Error("Erro ao busca usuario");
  }
}
