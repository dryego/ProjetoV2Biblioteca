import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function cadastroUsuario(nome: string, cpf: string) {
  try {
    const usuario = await prisma.usuario.create({
      data: {
        nome: nome,
        cpf: cpf,
      },
    });
    return usuario;
  } catch (error) {
    throw new Error("Erro ao cadastra usuario.");
  }
}
