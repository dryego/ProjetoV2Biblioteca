import express from "express";
import usuarioRotas from "./routes/usuarioRotas";
import livroRotas from "./routes/livroRotas";

const server = express();

server.use(express.json());

server.use("/usuario", usuarioRotas);
server.use("/livro", livroRotas);

export default server;
