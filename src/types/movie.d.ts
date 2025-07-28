'use client';

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Type: string;
}

export interface MovieDetails extends Movie {
  Genre: string;
  Plot: string;
  Director: string;
  Actors: string;
  Runtime: string;
}
