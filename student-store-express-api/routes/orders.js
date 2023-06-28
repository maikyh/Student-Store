const express = require('express');
const router = express.Router();
const Store = require("../models/store");

router.get("/", (req,res) => {
    res.status(200).json({
        products: Store.fetchOrders()
    })
});

router.get("/:orderId", (req,res) => {
    const { orderId } = req.params;
    res.status(200).json({
        product: Store.fetchOrder(orderId)
    })
});

module.exports = router;