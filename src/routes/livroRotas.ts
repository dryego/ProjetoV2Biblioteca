import express from "express";
import buscaLivroController from "../controller/livro/buscarLivroController";
import cadastroLivroController from "../controller/livro/cadastroLivroController";

const rotas = express.Router();

rotas.post("/cadastro", cadastroLivroController);
rotas.get("/busca/:id", buscaLivroController);

export default rotas;
