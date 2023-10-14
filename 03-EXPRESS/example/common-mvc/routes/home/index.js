const router = require("express").Router();
const api = require("./home");

router.use("/send", api);

module.exports = router;
