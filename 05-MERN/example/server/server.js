const express = require("express");
const mongo = require("./config/connection");
const routes = require("./routes");

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "../client/build/index.html");
});

mongo.once("open", () => {
    app.listen(PORT, () => {
        console.log(`Server running on port:${PORT}`);
    });
});
