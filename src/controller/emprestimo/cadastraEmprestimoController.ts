import { Request, Response, json } from "express";
import quantidadeEmpretimos from "../../util/quantidadeEmprestimos";
import cadastroEmprestimo from "../../repositories/emprestimo/cadastraEmprestimoRepositorio";
import dataParaEntrega from "../../util/dataEntrega";
import buscaLivro from "../../repositories/livro/buscaLivroRepositorio";
import buscaEmprestimoLivro from "../../util/buscaEmprestimoLivro";
import cadastraEmprestimoService from "../../service/emprestimo/cadastraEmprestimoService";

const cadastroEmprestimoControll = async (req: Request, res: Response) => {
  const idUsuario: number = req.body.idUsuario;
  const idLivro: number = req.body.idLivro;

  try {
    const emprestimo = await cadastraEmprestimoService(idUsuario, idLivro);

    return res.json({ mensagem: emprestimo });
  } catch (error) {
    console.log(error);

    return res.status(500).send("Erro interno.");
  }
};

export default cadastroEmprestimoControll;
