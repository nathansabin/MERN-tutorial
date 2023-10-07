const express = require("express");
const { dirname } = require("path");

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    try {
        res.status(200).sendFile(__dirname + "/public/index.html");
        console.log("rendered");
    } catch (err) {
        res.status(500).json(err);
    }
});

app.post("/data", (req,res) => {
    try {
        res.status(200).json("This is a post request");
    } catch (err) {
        res.status(400).json(err);
    }
});

app.listen(PORT, () => console.log(`Port running on localhost:${PORT}`));