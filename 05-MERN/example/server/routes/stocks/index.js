const router = require("express").Router();
const stocks = require("./stocksRoutes");

router.use("/data", stocks);

module.exports = router;