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

module.exports = resolvers;
