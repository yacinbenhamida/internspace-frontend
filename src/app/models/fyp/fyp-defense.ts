import { FypFile } from "./fyp-file";

export interface FYPDefense {
    id: number;
    classroom: string;
    defenseDate: Date;
    fyp_file_defense: FypFile;
}