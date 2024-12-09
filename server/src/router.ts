import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */
//Declaration of a "welcome" route

import sayActions from "./modules/say/sayActions";
router.get("/", sayActions.sayWelcome);

/* ************************************************************************* */
//Declaration of a "programs" route

import programActions from "./modules/program/programActions";
router.get("/api/programs", programActions.browse);

export default router;
