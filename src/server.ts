import express from "express";
import usuarioRotas from "./routes/usuarioRotas";
import livroRotas from "./routes/livroRotas";
import emprestimoRotas from "./routes/emprestimoRotas";

const server = express();

server.use(express.json());

server.use("/usuario", usuarioRotas);
server.use("/livro", livroRotas);
server.use("/emprestimo", emprestimoRotas);

export default server;
