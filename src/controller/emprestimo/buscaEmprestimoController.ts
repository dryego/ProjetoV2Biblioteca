import { Request, Response } from "express";
import { buscaEmprestimoService } from "../../service/emprestimo/buscaEmprestimosService";

export async function buscaEmprestimoController(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  try {
    const emprestimo = await buscaEmprestimoService(id);

    if (emprestimo.data) {
      return res.status(emprestimo.status).json(emprestimo.mensagem);
    }

    return res.status(emprestimo.status).json(emprestimo.data);
  } catch (error) {
    return res.status(500).send("Erro interno.");
  }
}
