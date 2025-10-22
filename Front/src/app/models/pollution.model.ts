export interface Pollution {
  id: string; 
  titre: string;
  type: string;
  description: string;
  date: string; 
  lieu: string;
  latitude: number;
  longitude: number;
  photo?: string;
}