import { Request, Response, json } from "express";
import { cadastroEmprestimoService } from "../../service/emprestimo/cadastroEmprestimoService";

export async function cadastroEmprestimoControll(req: Request, res: Response) {
  const idUsuario: number = req.body.idUsuario;
  const idLivro: number = req.body.idLivro;

  try {
    const emprestimo = await cadastroEmprestimoService(idUsuario, idLivro);

    if (emprestimo.data === null) {
      return res.status(emprestimo.status).json(emprestimo.mensagem);
    }

    return res.status(emprestimo.status).json(emprestimo.mensagem);
  } catch (error) {
    return res.status(500).send("Erro interno.");
  }
}
