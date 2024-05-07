import express from "express";
import buscaEmprestimoController from "../controller/emprestimo/buscaEmprestimoController";
import cadastroEmprestimoControll from "../controller/emprestimo/cadastraEmprestimoController";

const rotas = express.Router();

rotas.post("/cadastro", cadastroEmprestimoControll);
rotas.get("/busca/:id", buscaEmprestimoController);
rotas.put("/editar");

export default rotas;
