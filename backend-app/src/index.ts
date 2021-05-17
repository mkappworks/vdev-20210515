import Fastify, { FastifyInstance } from "fastify";

import infoRoute from "./routes/InfoRoute";
import moviesRoute from "./routes/MoviesRoute";

const server: FastifyInstance = Fastify({});

server.register(require("fastify-cors"));

server.register(infoRoute, { prefix: "/api" });

server.register(moviesRoute, { prefix: "/api" });

const start = async () => {
  try {
    await server.listen(3000);

    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
