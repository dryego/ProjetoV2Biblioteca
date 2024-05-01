import express from "express";
import livro from "../controller/livro";

const rotas = express.Router();

rotas.get("/", livro);

export default rotas;
