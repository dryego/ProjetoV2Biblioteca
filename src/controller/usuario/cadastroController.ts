import { Request, Response } from "express";
import { cadastroUsuario } from "../../repositories/usuario/cadastroRepositorio";
import { buscaUsuario } from "../../repositories/usuario/buscaRepositorio";
import { cadastrousuario } from "../../service/usuario/cadastroUsuarioService";

const cadastroContoller = async (req: Request, res: Response) => {
  const { nome, cpf } = req.body;

  try {
    const usuario = await cadastrousuario(nome, cpf);

    return res.status(usuario.status).json(usuario.mensagem);
  } catch (error) {
    return res.status(500).send(`Erro interno.`);
  }
};

export default cadastroContoller;
