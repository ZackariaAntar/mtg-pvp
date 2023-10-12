const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const search = require('./routes/search.router')
const deck = require('./routes/add.cards.router')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/api/search", search);
app.use("/api/deck", deck);


app.use(express.static("build"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});