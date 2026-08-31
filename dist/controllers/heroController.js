"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHero = exports.updateHero = exports.createHero = exports.fetchHero = exports.fetchAllHeroes = void 0;
const hero_1 = __importDefault(require("../models/hero"));
const fetchAllHeroes = async (_req, res) => {
    try {
        const heroes = await hero_1.default.find().sort({ created_at: -1 });
        res.json(heroes);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: message });
    }
};
exports.fetchAllHeroes = fetchAllHeroes;
const fetchHero = async (req, res) => {
    const { id } = req.params;
    try {
        const hero = await hero_1.default.findById(id);
        if (!hero) {
            return res.status(404).json({ message: 'Hero not found' });
        }
        return res.json(hero);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return res.status(500).json({ error: message });
    }
};
exports.fetchHero = fetchHero;
const createHero = async (req, res) => {
    const { hero_name, civil_name, story } = req.body;
    if (!hero_name || !civil_name || !story) {
        return res.status(400).json({ error: 'hero_name, civil_name and story are required' });
    }
    try {
        const hero = await hero_1.default.create({ hero_name, civil_name, story });
        return res.status(201).json({
            message: 'Hero Created',
            result: hero,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return res.status(500).json({ error: message });
    }
};
exports.createHero = createHero;
const updateHero = async (req, res) => {
    const { hero_name, civil_name, story } = req.body;
    const { id } = req.params;
    if (!hero_name && !civil_name && !story) {
        return res.status(400).json({ error: 'At least one field is required to update' });
    }
    try {
        const hero = await hero_1.default.findByIdAndUpdate(id, { ...(hero_name && { hero_name }), ...(civil_name && { civil_name }), ...(story && { story }) }, { new: true });
        if (!hero) {
            return res.status(404).json({ message: 'Hero not found' });
        }
        return res.json({ message: 'Hero updated', result: hero });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return res.status(500).json({ error: message });
    }
};
exports.updateHero = updateHero;
const deleteHero = async (req, res) => {
    const { id } = req.params;
    try {
        const hero = await hero_1.default.findByIdAndDelete(id);
        if (!hero) {
            return res.status(404).json({ message: 'Hero not found' });
        }
        return res.json({ message: 'Hero deleted', result: hero });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return res.status(500).json({ error: message });
    }
};
exports.deleteHero = deleteHero;
//# sourceMappingURL=heroController.js.map