const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
    avgScore: Float
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

module.exports = { typeDefs };
