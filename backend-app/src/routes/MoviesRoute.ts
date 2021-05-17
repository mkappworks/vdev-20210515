import { FastifyPluginAsync } from "fastify";

const moviesData: unknown = [
  {
    id: 1,
    name: "Inception",
    year: 2010,
    description: "A thief tries to plant an idea into the mind of a C.E.O.",
  },
  {
    id: 2,
    name: "The Matrix",
    year: 1999,
    description: "A hacker discovers a shocking truth about his world.",
  },
  {
    id: 3,
    name: "Donnie Darko",
    year: 2001,
    description: "A troubled teenager follows a man in a rabbit suit.",
  },
];

const moviesRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get("/movies", async function () {
    return moviesData;
  });
};

export default moviesRoute;