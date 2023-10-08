import React from 'react';

interface MovieCardProps {
  title: string;
  releaseDate: string;
  genre: string;
  popularity: number;
  rating: number;
  posterPath: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  releaseDate,
  genre,
  popularity,
  rating,
  posterPath,
}) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg w-72 mx-auto">
      <div className="relative">
        <img src={posterPath} alt={title} className="w-full rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <a href="#" className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">Watch Trailer</a>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
        <p className="text-gray-400 text-sm mt-2">Released on: {releaseDate}</p>
        <p className="text-gray-400 text-sm mt-1">Genre: {genre}</p>
        <p className="text-gray-400 text-sm mt-1">Popularity: {popularity.toFixed(3)}</p>
        <p className="text-gray-400 text-sm mt-1">Rating: {rating} ({rating} votes)</p>
      </div>
    </div>
  );
};

export default MovieCard;
