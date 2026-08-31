"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const heroSchema = new Schema({
    hero_name: { type: String, required: true },
    civil_name: { type: String, required: true },
    story: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});
exports.default = mongoose_1.default.model('Hero', heroSchema);
//# sourceMappingURL=hero.js.map