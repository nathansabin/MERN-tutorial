const express = require("express");
const path = require("path");
const routes = require("./routes");

const PORT = 3001;
const app = express();

app.use(express.static(path.join(__dirname, "view")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(PORT, () => console.log(`Listening at localhost:${PORT}`));
