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

    static createOrder( { user, shoppingCart } ) {
        try {
            if (!user || !shoppingCart) throw new BadRequestError();

            const uniqueValues = new Set(shoppingCart.map(v => v.itemId));
            if (uniqueValues.size < shoppingCart.length) throw new BadRequestError();

            let total = 0;

            for (let i = 0; i < shoppingCart.length; i++) {
                let { quantity, itemId } = shoppingCart[i];
                if (!quantity || !itemId) throw new BadRequestError();

                total += shoppingCart[i].quantity * Store.fetchProduct(shoppingCart[i].itemId).price;
            };

            total *= 1.0875;

            const purchase = {
                id: storage.get("purchases").value().length + 1,
                name: user.name,
                email: user.email,
                order: shoppingCart,
                total,
                createdAt: new Date().toString(),
                receipt: `Receipt #${storage.get("purchases").value().length + 1}: User: ${user.name}. Total: $${total.toFixed(2)}`
            }

            storage.get("purchases").push(purchase).write();

            return purchase;
        } catch (error) {
            throw new BadRequestError(error);
        }
    }
}

module.exports = Store;

