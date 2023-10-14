const router = require("express").Router();
const api = require("./api");

router.use("/data", api);

module.exports = router;
