const router = require("express").Router();
const { pages } = require("../controllers");

// pages
router.get("/", pages.home);
router.get("/artikel", pages.artikel);
router.get("/tentang", pages.tentang);
router.get("/screening", pages.screening);

module.exports = router;