import createServer from "./server";

createServer({ introspection: true, playground: true })
  .listen()
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
