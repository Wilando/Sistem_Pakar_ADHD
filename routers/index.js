const router = require("express").Router();
const { pages, cf } = require("../controllers");

// pages
router.get("/", pages.home);
router.get("/artikel", pages.artikel);
router.get("/tentang", pages.tentang);
router.get("/screening", pages.screening);

//api
router.post("/cf_calculate", cf.calculate_cf);

module.exports = router;