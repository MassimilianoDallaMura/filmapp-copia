export interface Movie {
    id: number;
    title: string;
    director: string;
    year: number;
    genre: string[];
    description: string;
    durationMinutes: number;
    rating: number;
    cast: string[];
    releaseDate: Date;
    country: string;
    language: string;
    awards: string[];
}
