const api = (req, res, next) => {
    try {
        res.status(200).json("API DATA");
    } catch (err) {
        res.status(404).json(err);
    }
};

module.exports = api;