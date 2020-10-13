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

  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

const resolvers = {
  Query: {
    books: async (_source, _args, { dataSources }) => {
      return dataSources.booksAPI.getAll();
    },
  },

  Mutation: {
    addBook: async (_source, book, { dataSources }) => {
      console.log({ book });
      return dataSources.booksAPI.add(book);
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
