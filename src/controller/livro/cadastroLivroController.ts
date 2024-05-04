import { Request, Response } from "express";
import buscaLivro from "../../repositories/livro/buscaLivroRepositorio";
import cadastroLivroRepositorio from "../../repositories/livro/cadastroLivroRepositorio";

const cadastroLivroController = async (req: Request, res: Response) => {
  const { id, titulo, anoPublicacao } = req.body;
  try {
    const livro = await buscaLivro(id);

    if (livro?.id === id) {
      return res.status(404).json({ mensagem: "Livro ja cadastrado." });
    }

    await cadastroLivroRepositorio(id, titulo, anoPublicacao);

    return res.status(200).json({ mensagem: "Livro cadastrado com sucesso." });
  } catch (error) {
    return res.status(500).send("Erro interno.");
  }
};

export default cadastroLivroController;
