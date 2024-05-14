import { Request, Response } from "express";
import { buscaLivroService } from "../../service/livro/buscaLivroService";

export async function buscaLivroController(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  try {
    const livro = await buscaLivroService(id);

    if (livro.data === null) {
      return res.status(livro.status).json(livro.mensagem);
    }
    return res.status(livro.status).json(livro.data);
  } catch (error) {
    return res.status(500).send("Erro interno.");
  }
}
