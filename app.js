const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const CausaController = require("./controllers/causaController");

app.use(bodyParser.json());

app.get("/causa", CausaController.getCausas);
app.get("/causa/:id", CausaController.getCausa);
app.post("/causa", CausaController.newCausa);

let port = 3000;
app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});

const mongoose = require("mongoose");
let dev_db_url =
  "mongodb+srv://Jonathan:PASSWORD@cluster0-4vjej.mongodb.net/test?retryWrites=true";
let mongoDB = dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
