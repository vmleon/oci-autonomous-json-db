const { RESTDataSource } = require("apollo-datasource-rest");
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
    console.log("HTTP get all Books");
    const results = await this.get(`${booksPath}?${params}`);
    return results.items.map((item) => item.value);
  }

  async add(book) {
    console.log("HTTP create Book");
    const result = await this.post(`${booksPath}`, book);
    console.log(JSON.stringify(result, null, 2));
    return book;
  }
}

module.exports = BooksAPI;
