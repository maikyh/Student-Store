const express = require('express');
const router = express.Router();
const Store = require("../models/store");

router.get("/", (req,res) => {
    res.status(200).json({
        products: Store.fetchProducts()
    })
});

router.get("/:productId", (req,res) => {
    const { productId } = req.params;
    res.status(200).json({
        product: Store.fetchProduct(productId)
    })
});

router.post("/", (req,res) => {
    const { shoppingCart, user} = req.body;

    const purchase = Store.createOrder({ user, shoppingCart });

    res.status(201).json({
        purchase
    })
});

module.exports = router;