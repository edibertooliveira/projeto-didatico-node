import Fastify from "fastify";
import registerPlugins from "./plugins.js";

const PORT = 3003;
const HOST = "::";
const PREFIX = 'api'

export async function buildApp(config) {
  
  const fastify = Fastify({
    prefix: config.prefix,
    logger: true
  });
  
  registerPlugins(fastify, config);
  
  
  return fastify;
}

export default async function () {
  const config = {
    port: PORT,
    host: HOST,
    prefix: PREFIX,
  };
  const app = await buildApp(config)
  
  await app.listen(PORT, HOST);
}
