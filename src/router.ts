import { Router } from "express";
// Setting-up the router
const router = Router()

/** SingOn & Authentication **/
router.post("/auth/register", (req, res) => {
    console.log(req.body);
});

// Exporting the router
export default router;
