const router = require("express").Router();
const home = require("../../controllers/homeController/");

router.get("/", home);

module.exports = router;

