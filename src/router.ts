import { Router } from "express";

const router = Router()
// Routing
router.get("/", (req, res) => {
    res.send("Welcome to my Home Page from Express & Barry");
});
router.get("/about", (req, res) => {
    res.send("Welcome to About Me");
});
router.get("/blog", (req, res) => {
    res.send("Welcome to my Blog");
});
