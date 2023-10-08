"use client";

import { useMovies } from "@/hooks/useFetch";
import Image from "next/image";
type Imovie = {
  title: string;
  poster_path: string;
  release_date: string;
  genre: string;
  popularity: number;
  rating: number;
};
const MoviesWrapper = () => {
  const { data, isLoading, error } = useMovies();
  
  return (
    <div className="flex flex-wrap ">
      {data?.data?.results.map((movie: Imovie, idx: number) => {
        return (
          <div
            className="bg-black p-6 rounded-lg shadow-lg w-72 mx-auto"
            key={idx}
          >
            <div className="relative">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="w-full rounded-lg"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  Watch Trailer
                </a>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-white text-lg font-semibold">
                {movie.title}
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                Released on: {movie.release_date}
              </p>
              <p className="text-gray-400 text-sm mt-1">Genre: {movie.genre}</p>
              <p className="text-gray-400 text-sm mt-1">
                Popularity: {movie.popularity.toFixed(3)}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Rating: {movie.rating} ({movie.rating} votes)
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesWrapper;
