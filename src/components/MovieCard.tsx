'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Movie } from '@/types/movie';

export default function MovieCard({ movie }: { movie: Movie }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    router.push(`/movie/${movie.imdbID}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative border rounded-md overflow-hidden shadow hover:shadow-md transition cursor-pointer"
    >
      {loading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10">
          <span className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></span>
        </div>
      )}

      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : '/no-image.png'}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <div className="p-3">
        <h3 className="font-semibold text-lg">{movie.Title}</h3>
        <p className="text-sm text-gray-500">{movie.Year}</p>
      </div>
    </div>
  );
}
