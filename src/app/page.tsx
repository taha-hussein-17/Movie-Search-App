'use client';

import { useState } from 'react';
import SearchInput from '@/components/SearchInput';
import MovieList from '@/components/MovieList';
import { fetchMovies } from '@/lib/fetcher';
import { Movie } from '@/types/movie';

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError('');
    localStorage.setItem('lastSearch', query);
    try {
      const result = await fetchMovies(query);
      setMovies(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Something went wrong');
      } else {
        setError('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Movie Search App</h1>
      <SearchInput onSearch={handleSearch} />

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-80 rounded-md bg-gray-200 animate-pulse" />
          ))}
        </div>
      )}

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {!loading && !error && movies.length > 0 && (
        <div className="mt-6">
          <MovieList movies={movies} />
        </div>
      )}
    </main>
  );
}
