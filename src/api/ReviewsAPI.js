const { RESTDataSource } = require("apollo-datasource-rest");
const logger = require("pino")();
const qs = require("qs");
const { SODA_URL, SODA_USER, SODA_PASSWORD } = process.env;
const reviewsPath = `${SODA_URL}/reviews`;

class ReviewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${SODA_URL}/`;
  }

  willSendRequest(request) {
    const token = Buffer.from(`${SODA_USER}:${SODA_PASSWORD}`).toString(
      "base64"
    );
    request.headers.set("Authorization", `Basic ${token}`);
  }

  async getAllByBookId(title) {
    logger.info("ReviewsAPI.getAllByBookId");
    const queryParams = qs.stringify({ action: "query", fields: "value" });
    const filters = {
      book: title,
    };
    const results = await this.post(`${reviewsPath}?${queryParams}`, filters);
    return results.items.map((item) => item.value);
  }

  async write(review) {
    logger.info("ReviewsAPI.write");
    await this.post(`${reviewsPath}`, review);
    return review;
  }
}

module.exports = ReviewsAPI;
