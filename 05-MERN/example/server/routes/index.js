const router = require("express").Router();
const user = require("./user");
const stocks = require("./stocks");

router.use("/user", user);
router.use("/stocks", stocks);

module.exports = router;