import { Request, Response } from "express";
import { buscaUsuarioService } from "../../service/usuario/buscaUsuarioService";

const buscaController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const usuario = await buscaUsuarioService(id);

    if (usuario.data === null) {
      return res.status(usuario.status).json(usuario.mensagem);
    }

    return res.status(usuario.status).json(usuario.data);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error });
  }
};

export default buscaController;
