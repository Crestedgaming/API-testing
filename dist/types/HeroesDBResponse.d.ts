import type { RowDataPacket } from "mysql2";
export interface HeroesDBResponse extends RowDataPacket {
    id: number;
    hero_name: string;
    civil_name: string;
    story: string;
    created_at: Date;
    updated_at: Date;
}
//# sourceMappingURL=HeroesDBResponse.d.ts.map