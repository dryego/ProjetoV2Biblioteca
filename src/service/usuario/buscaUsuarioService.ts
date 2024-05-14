import { buscaUsuario } from "../../repositories/usuario/buscaRepositorio";

export async function buscaUsuarioService(idUsuario: number) {
  const usuario = await buscaUsuario(idUsuario);

  if (!usuario) {
    return { status: 404, mensagem: "Usuario nao encontrado.", data: null };
  }

  return {
    status: 200,
    mensagem: "usuario encontrado com sucesso.",
    data: usuario,
  };
}
