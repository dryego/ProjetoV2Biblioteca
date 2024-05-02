import { PrismaClient } from "@prisma/client";
import Usuario from "../../model/usuario";
import buscaUsuario from "./buscaRepositorio";

const prisma = new PrismaClient();

const cadastroUsuario = async (nome: string, cpf: string) => {
  try {
    const novoUsuario = new Usuario(nome, cpf);
    const usuario = await prisma.usuario.create({
      data: {
        nome: novoUsuario.getNome,
        cpf: novoUsuario.getCpf,
      },
    });
    return usuario;
  } catch (error) {
    throw new Error("Erro ao cadastra usuario.");
  }
};

export default cadastroUsuario;
