import server from "./server.js";

async function main() {
  try {
    await server();
  } catch (error) {
    server.log.error(error);
  }
}

main();
