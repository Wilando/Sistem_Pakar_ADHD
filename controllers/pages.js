// Load variabel .env ketika development
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const base_url = process.env.BASE_URL;

module.exports = {
  home: (req, res) => {
    return res.render("pages/home", { baseUrl: base_url });
  },
  artikel: (req, res) => {
    return res.render("pages/artikel", { baseUrl: base_url });
  },
  tentang: (req, res) => {
    return res.render("pages/tentang", { baseUrl: base_url });
  },
  screening: (req, res) => {
    return res.render("pages/screening", { baseUrl: base_url });
  },
};