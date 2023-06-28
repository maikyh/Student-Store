const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

class Store {
    static fetchProducts() {
        try {
            return storage.get("products").value();
        } catch (error) {
            throw new BadRequestError(error);
        }
    }

    static fetchProduct(id) {
        try {
            return storage.get("products").find({ id: Number(id) }).value();
        } catch (error) {
            throw new BadRequestError(error);
        }
    }
}

module.exports = Store;

