
import { Movie } from '@/types/movie';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
//  Check if movies array is empty
  if (movies.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No movies found. Try a different title.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
