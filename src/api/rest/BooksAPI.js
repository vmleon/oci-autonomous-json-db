const { RESTDataSource } = require("apollo-datasource-rest");
const logger = require("pino")();
const qs = require("qs");
const { SODA_URL, SODA_USER, SODA_PASSWORD } = process.env;
const booksPath = `${SODA_URL}/books`;
const params = qs.stringify({ fields: "value" });

class BooksAPI extends RESTDataSource {
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

  async getAll() {
    logger.info("BooksAPI.getAll");
    const results = await this.get(`${booksPath}?${params}`);
    return results.items.map((item) => item.value);
  }

  async add(book) {
    logger.info("BooksAPI.add");
    await this.post(`${booksPath}`, book);
    return book;
  }
}

module.exports = BooksAPI;
