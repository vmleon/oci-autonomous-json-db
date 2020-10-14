const { ApolloServer, gql } = require("apollo-server");
const logger = require("pino")();
require("dotenv").config();
const BooksAPI = require("./BooksAPI");
const ReviewsAPI = require("./ReviewsAPI");

const typeDefs = gql`
  type Book {
    title: String
    author: String
    reviews: [Review]
  }

  type Review {
    score: Int
    comment: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String, author: String): Book
    writeReview(book: String, score: Int, comment: String): Review
  }
`;

const resolvers = {
  Query: {
    books: async (_source, _args, { dataSources }) => {
      return dataSources.booksAPI.getAll();
    },
  },

  Book: {
    reviews: ({ title }, _args, { dataSources }) => {
      return dataSources.reviewsAPI.getAllByBookId(title);
    },
  },

  Mutation: {
    addBook: async (_source, book, { dataSources }) => {
      return dataSources.booksAPI.add(book);
    },
    writeReview: async (_source, review, { dataSources }) => {
      return dataSources.reviewsAPI.write(review);
    },
  },
};

const dataSources = () => ({
  booksAPI: new BooksAPI(),
  reviewsAPI: new ReviewsAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen().then(({ url }) => {
  logger.info(`🚀  Server ready at ${url}`);
});
