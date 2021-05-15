import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

const server: FastifyInstance = Fastify({});

const info: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          version: {
            type: "number",
          },
          description: {
            type: "string",
          },
        },
      },
    },
  },
};

server.get("/api/info", info, async (request, reply) => {
  return { version: 1, description: "Movies server API" };
});

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
