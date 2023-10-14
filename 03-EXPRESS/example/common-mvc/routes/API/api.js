const router = require("express").Router();
const api = require("../../controllers/apiController/");

router.get("/", api);

module.exports = router;
