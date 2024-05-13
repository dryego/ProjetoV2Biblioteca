import { Request, Response } from "express";
import devolverEmpesrimo from "../../service/devolucao/devolucaoEmprestimoService";

const devolucaoLivroController = async (req: Request, res: Response) => {
  const idUsuario: number = req.body.idUsuario;
  const idEmprestimo: number = req.body.idEmprestimo;

  try {
    const devolucao = await devolverEmpesrimo(idUsuario, idEmprestimo);

    if (!devolucao) {
      return res.status(404).json(Error);
    }

    return res.json(devolucao);
  } catch (Error) {
    console.log(Error);

    return res.status(500).json(Error);
  }
};

export default devolucaoLivroController;
