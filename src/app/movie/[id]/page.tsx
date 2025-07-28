
import { fetchMovieDetails } from '@/lib/fetcher';
import { MovieDetails } from '@/types/movie';
import Link from 'next/link';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ id: string }>; 
}

export default async function MovieDetailsPage({ params }: PageProps) {
   const awaitedParams = await params;    // انتظر params
  const id = awaitedParams.id;

  let movie: MovieDetails;
  try {
    movie = await fetchMovieDetails(id);
  } catch {
    return <p className="p-4 text-red-500">Movie not found.</p>;
  }
  return (
    
    <div className="max-w-3xl mx-auto p-6">
      <Link href="/" className="text-blue-500 underline mb-4 block">
        ← Back to search
      </Link>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Movie Poster */}
       <Image src={movie.Poster} alt={movie.Title} width={300} height={450} />

        <div>
          {/* Movie Details */}
          <h1 className="text-2xl font-bold">{movie.Title} ({movie.Year})</h1>
          <p className="mt-2"><strong>Genre:</strong> {movie.Genre}</p>
          <p className="mt-2"><strong>Director:</strong> {movie.Director}</p>
          <p className="mt-2"><strong>Actors:</strong> {movie.Actors}</p>
          <p className="mt-2"><strong>Plot:</strong> {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
}
