
import { Request, Response } from "express";
import Hero from "../models/hero";

export const fetchAllHeroes = async (_req: Request, res: Response) => {
    try {
        const heroes = await Hero.find().sort({ created_at: -1 });
        res.json(heroes);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: message });
    }
};

export const fetchHero = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const hero = await Hero.findById(id);

        if (!hero) {
            return res.status(404).json({ message: 'Hero not found' });
        }

        return res.json(hero);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return res.status(500).json({ error: message });
    }
};

export const createHero = async (req: Request, res: Response) => {
    const { hero_name, civil_name, story } = req.body;

    if (!hero_name || !civil_name || !story) {
        return res.status(400).json({ error: 'hero_name, civil_name and story are required' });
    }

    try {
        const hero = await Hero.create({ hero_name, civil_name, story });

        return res.status(201).json({
            message: 'Hero Created',
            result: hero,
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return res.status(500).json({ error: message });
    }
};

export const updateHero = async (req: Request, res: Response) => {
    const { hero_name, civil_name, story } = req.body;
    const { id } = req.params;

    if (!hero_name && !civil_name && !story) {
        return res.status(400).json({ error: 'At least one field is required to update' });
    }

    try {
        const hero = await Hero.findByIdAndUpdate(
            id,
            { ...(hero_name && { hero_name }), ...(civil_name && { civil_name }), ...(story && { story }) },
            { new: true }
        );

        if (!hero) {
            return res.status(404).json({ message: 'Hero not found' });
        }

        return res.json({ message: 'Hero updated', result: hero });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return res.status(500).json({ error: message });
    }
};

export const deleteHero = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const hero = await Hero.findByIdAndDelete(id);

        if (!hero) {
            return res.status(404).json({ message: 'Hero not found' });
        }

        return res.json({ message: 'Hero deleted', result: hero });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return res.status(500).json({ error: message });
    }
};