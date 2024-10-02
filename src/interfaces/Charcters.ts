export interface Character {
    id: number;
    name: string;
    image: string;
    description: string;
    category: string;
    common_locations: string[];
    drops: string[]; 
    edible: boolean;
  }
  