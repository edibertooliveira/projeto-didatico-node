import Fastify from "fastify";
import registerPlugins from "./plugins.js";

const PORT = 3003;
const HOST = "::";
const PREFIX = 'api'

export default async function () {
    const config = {
      port: PORT,
      host: HOST,
      prefix: PREFIX,
    };

  const fastify = Fastify({
    prefix: config.prefix,
    logger: true
  });

  registerPlugins(fastify, config);

  await fastify.listen(PORT, HOST);

  return fastify;
}
