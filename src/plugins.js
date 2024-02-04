import fastifyHealthcheck from "fastify-healthcheck";

function healthcheck(client, config) {
  client.register(fastifyHealthcheck, {
    healthcheckUrl: `/${config.prefix}/healthcheck`,
  });
}

const plugins = [healthcheck]

export default function(client, config) {
    for (const plugin of plugins) {
        plugin(client, config)
    }
}