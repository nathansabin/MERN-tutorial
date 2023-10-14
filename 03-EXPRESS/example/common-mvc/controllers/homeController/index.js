const path = require("path");

const home = (req, res, next) => {
    try {
        res.status(200).sendFile(path.resolve(__dirname, "../../view/index.html"));
    } catch (err) {
        res.status(404).json(err);
    }
};

module.exports = home;