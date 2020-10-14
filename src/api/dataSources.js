const BooksAPI = require("./rest/BooksAPI");
const ReviewsAPI = require("./rest/ReviewsAPI");

const dataSources = () => ({
  booksAPI: new BooksAPI(),
  reviewsAPI: new ReviewsAPI(),
});

module.exports = dataSources;
