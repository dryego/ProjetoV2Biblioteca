import express from "express";
import rotas from "./routes/rotas";

const server = express();

server.use(express.json());

server.use("/", rotas);

export default server;
