import { Request, Response, json } from "express";

export async function cadastroEmprestimoControll(req: Request, res: Response) {
  const idUsuario: number = req.body.idUsuario;
  const idLivro: number = req.body.idLivro;
  console.log(idUsuario, idLivro);

  try {
  } catch (error) {
    console.log(error);

    return res.status(500).send("Erro interno.");
  }
}
