import { Request, Response } from "express";
import cadastroUsuario from "../../repositories/usuario/cadastroRepositorio";
import buscaUsuario from "../../repositories/usuario/buscaRepositorio";

const cadastroContoller = async (req: Request, res: Response) => {
  const { nome, cpf } = req.body;

  try {
    const novoUsuario = await cadastroUsuario(nome, cpf);
    console.log(novoUsuario);

    if ((await buscaUsuario(cpf)) !== undefined) {
      return res.status(404).json({ mensagem: "Usuario já cadastrado." });
    }
    return res
      .status(200)
      .json({ menssagem: "cadastro realizado com sucesso." });
  } catch (error) {
    return res.status(500).send("Erro interno.");
  }
};

export default cadastroContoller;
