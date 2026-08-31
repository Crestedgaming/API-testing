import express from "express";
import {
    fetchAllHeroes,
    fetchHero,
    createHero,
    updateHero,
    deleteHero,
} from "../controllers/heroController";

const router = express.Router();

router.get('/', fetchAllHeroes);
router.get('/:id', fetchHero);
router.post('/', createHero);
router.patch('/:id', updateHero);
router.delete('/:id', deleteHero);

export default router;