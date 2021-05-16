import { FastifyPluginAsync } from "fastify";

const infoData = { version: 1, description: "Movies server API" };

const infoRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get("/info", async function () {
    return infoData;
  });
};

export default infoRoute;
