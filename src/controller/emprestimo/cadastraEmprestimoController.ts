import { Request, Response, json } from "express";
import quantidadeEmpretimos from "../../util/quantidadeEmprestimos";
import cadastroEmprestimo from "../../repositories/emprestimo/cadastraEmprestimoRepositorio";
import dataParaEntrega from "../../util/dataEntrega";
import buscaLivro from "../../repositories/livro/buscaLivroRepositorio";
import Livro from "../../model/livro";
import buscaEmprestimoLivro from "../../util/buscaEmprestimoLivro";
import buscaUsuario from "../../repositories/usuario/buscaRepositorio";

const cadastroEmprestimoControll = async (req: Request, res: Response) => {
  //const { idUsuario, idLivro } = req.body;
  const idUsuario: number = req.body.idUsuario;
  const idLivro: number = req.body.idLivro;
  console.log(idUsuario, idLivro);

  try {
    const livro = await buscaLivro(idLivro);

    if (!livro) {
      return res.status(404).json({ mensagem: "Livro nao encontrado." });
    }

    const quantidadeEmprestimo = await quantidadeEmpretimos(idUsuario);
    console.log(quantidadeEmprestimo);

    if (quantidadeEmprestimo >= 3) {
      return res
        .status(404)
        .json({ mensagem: "O usuario nao pode ter novos emprestimos" });
    }

    const buscaEmprestimo = await buscaEmprestimoLivro(idLivro);

    if (
      buscaEmprestimo === null ||
      buscaEmprestimo.emprestimoLivro.length > 0
    ) {
      return res.status(404).json({ mensagem: "Livro não disponivel." });
    }

    const dataEntrega = await dataParaEntrega();
    const entregaRealizada: boolean = false;
    await cadastroEmprestimo(idLivro, idUsuario, dataEntrega, entregaRealizada);
    return res.json({ mensagem: "Emprestimo realizado com sucesso." });
  } catch (error) {
    console.log(error);

    return res.status(500).send("Erro interno.");
  }
};

export default cadastroEmprestimoControll;
