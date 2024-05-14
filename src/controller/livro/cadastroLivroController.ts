import { Request, Response } from "express";
import { cadastroLivroService } from "../../service/livro/cadastroLivroService";

export async function cadastroLivroController(req: Request, res: Response) {
  const { id, titulo, anoPublicacao } = req.body;
  try {
    const livro = await cadastroLivroService(id, titulo, anoPublicacao);

    if (livro.data === null) {
      return res.status(livro.status).json(livro.mensagem);
    }

    return res.status(livro.status).json(livro.mensagem);
  } catch (error) {
    return res.status(500).send("Erro interno.");
  }
}
