import { cadastroUsuario } from "../../repositories/usuario/cadastroRepositorio";
import { buscausuarioCpf } from "../../util/buscaUsuarioCpf";

export async function cadastrousuario(nome: string, cpf: string) {
  const usuario = await buscausuarioCpf(cpf);

  if (usuario !== null) {
    return {
      status: 404,
      mensagem: "Usuario já cadastrado.",
      data: null,
    };
  }

  const novoUsuario = await cadastroUsuario(nome, cpf);

  return {
    status: 200,
    mensagem: "Usuario cadastrado com sucesso.",
    data: novoUsuario,
  };
}
