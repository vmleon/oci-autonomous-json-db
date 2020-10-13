const { ApolloServer, gql } = require("apollo-server");
require("dotenv").config();
const BooksAPI = require("./BooksAPI");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: async (_source, _args, { dataSources }) => {
      return dataSources.booksAPI.getAll();
    },
  },
};

const dataSources = () => ({
  booksAPI: new BooksAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
