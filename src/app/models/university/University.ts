import { Site } from "./Site";

export interface University {
    id: number;
    name: string;
    openingYear: Date;
    owner: string;
    logoUrl: string;
    location: string;
    fypClassYear: number;
    sites: Site[];
  }
  