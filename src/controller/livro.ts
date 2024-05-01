import { Request, Response } from "express";

const livro = async (req: Request, res: Response) => {
  try {
    return res
      .status(200)
      .json({ titulo: "Uma mente brilhante", escritor: "jose" });
  } catch (error) {
    return res.status(500).json({ mensagem: `Erro interno: ${error}` });
  }
};

export default livro;
