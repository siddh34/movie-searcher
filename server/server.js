const express = require('express')
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const app = express()
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", async (req, res) => {
    let searchQuery = req.query.name;

    console.log(searchQuery);

    let key = "ca9558c4";

    try {
        const response = await axios.get(
            `http://www.omdbapi.com/?apikey=${key}&s=${searchQuery}`
        );
        const movieNames = response.data.Search.map((movie) => movie.Title);

        console.log(movieNames)

        res.status(200).json({ movieNames });
    } catch (error) {
        console.error("Error fetching movie names:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/", (req, res) => {
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
