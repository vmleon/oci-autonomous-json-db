const { ApolloServer } = require("apollo-server");
const logger = require("pino")();
require("dotenv").config();
const { typeDefs } = require("./schema");
const resolvers = require("./resolvers");
const dataSources = require("./dataSources.js");

const SERVER_PORT = process.env.SERVER_PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen({ port: SERVER_PORT }).then(({ url }) => {
  logger.info(`🚀  Server ready at ${url}`);
});
