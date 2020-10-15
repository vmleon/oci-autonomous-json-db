const resolvers = {
  Query: {
    books: async (_source, _args, { dataSources }) => {
      return dataSources.booksAPI.getAll();
    },
  },

  Book: {
    reviews: async ({ title }, _args, { dataSources }) => {
      return dataSources.reviewsAPI.getAllByBookId(title);
    },
    avgScore: async ({title}, _args, { dataSources}) => {
      const reviews = await dataSources.reviewsAPI.getAllByBookId(title);
      const scores= reviews.map(rev => rev.score);
      const avgScore = scores
        .reduce((avg, value, _, { length }) => {
          return avg + value / length;
        }, 0);
      return avgScore;
    }
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
