import express from "express";
import devolucaoLivroController from "../controller/devolucao/devolucaoLivroController";

const rotas = express.Router();

rotas.put("/devolucao", devolucaoLivroController);
