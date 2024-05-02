import { Request, Response } from "express";
import buscaUsuario from "../../repositories/usuario/buscaRepositorio";

const buscaController = async (req: Request, res: Response) => {
  const { cpf } = req.params;
  try {
    const usuario = await buscaUsuario(cpf);

    if (usuario === undefined) {
      return res.status(400).json({ menssagem: "Usuario não encontrado." });
    }
    return res.json(usuario);
  } catch (error) {
    return res.status(500).send("Erro interno.");
  }
};

export default buscaController;
