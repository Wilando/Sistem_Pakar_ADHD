// Load variabel .env ketika development
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

// View Engine
app.use(express.static('public'));
app.set("view engine", "ejs");

// Middleware json untuk membaca request body bertipe json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware router
const router = require("./routers");
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});