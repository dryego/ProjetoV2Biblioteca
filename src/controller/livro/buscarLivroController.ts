import { Request, Response } from "express";
import buscaLivro from "../../repositories/livro/buscaLivroRepositorio";

const buscaLivroController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const livro = await buscaLivro(parseInt(id));

    if (livro === null) {
      return res.status(404).json({ mensagem: "Livro nao encontrado." });
    }
    return res.status(200).json(livro);
  } catch (error) {
    return res.status(500).send("Erro interno.");
  }
};

export default buscaLivroController;
