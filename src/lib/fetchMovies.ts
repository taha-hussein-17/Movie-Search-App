'use client';
export const fetchMovies = async (query: string) => {
  const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const data = await res.json();

  if (data.Response === 'False') {
    return [];
  }

  return data.Search;
};
