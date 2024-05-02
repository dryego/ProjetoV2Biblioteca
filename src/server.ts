import express from "express";
import usuarioRotas from "./routes/usuarioRotas";

const server = express();

server.use(express.json());

server.use("/usuario", usuarioRotas);

export default server;
