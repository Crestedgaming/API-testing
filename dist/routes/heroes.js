"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const heroController_1 = require("../controllers/heroController");
router.get('/', heroController_1.fetchAllHeroes);
router.get('/:id', heroController_1.fetchHero);
router.post('/', heroController_1.createHero);
router.patch('/:id', heroController_1.updateHero);
router.delete('/:id', heroController_1.deleteHero);
exports.default = router;
//# sourceMappingURL=heroes.js.map