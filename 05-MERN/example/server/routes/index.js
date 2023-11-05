const router = require("express").Router();
const user = require("./user/userRoutes");
const stocks = require("./stocks/stocksRoutes");

router.use("/user", user);
router.use("/stocks", stocks);

module.exports = router;