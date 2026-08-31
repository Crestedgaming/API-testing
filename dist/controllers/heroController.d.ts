import { Request, Response } from "express";
export declare const fetchAllHeroes: (_req: Request, res: Response) => Promise<void>;
export declare const fetchHero: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const createHero: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateHero: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteHero: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=heroController.d.ts.map