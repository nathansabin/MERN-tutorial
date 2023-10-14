const router = require("express").Router();
const home = require("./home");
const api = require("./API");

router.use("/home", home);
router.use("/api", api);

 module.exports = router;
