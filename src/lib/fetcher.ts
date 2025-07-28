const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  
export const fetchMovies = async (query: string) => {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  const data = await res.json();
  if (data.Response === 'False') throw new Error(data.Error);
  return data.Search;
};
// This function fetches movie details by ID
// It uses the same API key and returns detailed information about the movie
export const fetchMovieDetails = async (id: string) => {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
  const data = await res.json();
  if (data.Response === 'False') throw new Error(data.Error);
  return data;
};
