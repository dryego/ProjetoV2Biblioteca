import "dotenv/config";
import server from "./server";

server.listen(process.env.PORT, () => console.log("Servidor Inicializado..."));
