import express from "express";
import cadastroContoller from "../controller/usuario/cadastroController";
import buscaController from "../controller/usuario/buscaController";

const rotas = express.Router();

rotas.post("/cadastro", cadastroContoller);
rotas.get("/mostra/:id", buscaController);

export default rotas;
