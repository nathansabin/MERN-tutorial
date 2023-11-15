const router = require("express").Router();
const user = require("./userRoutes");

router.use("/auth", user);

module.exports = router;