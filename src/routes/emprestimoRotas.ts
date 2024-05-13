import express from "express";
import buscaEmprestimoController from "../controller/emprestimo/buscaEmprestimoController";
import cadastroEmprestimoControll from "../controller/emprestimo/cadastraEmprestimoController";
import devolucaoLivroController from "../controller/devolucao/devolucaoLivroController";

const rotas = express.Router();

rotas.post("/cadastro", cadastroEmprestimoControll);
rotas.get("/busca/:id", buscaEmprestimoController);
rotas.put("/devolucao/", devolucaoLivroController);

export default rotas;
