import { Request, Response } from "express";
import buscaEmprestimo from "../../repositories/emprestimo/buscaEmprestimoRepositorio";

const buscaEmprestimoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const emprestimo = await buscaEmprestimo(parseInt(id));
    if (emprestimo === null) {
      return res.status(404).json({ mensagem: "Emprestimo não encontrado." });
    }
    return res.status(200).json(emprestimo);
  } catch (error) {
    return res.status(500).send("Erro interno.");
  }
};

export default buscaEmprestimoController;
