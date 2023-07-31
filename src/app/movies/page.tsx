"use client";

import { useQuery } from "react-query";
import Image from "next/image";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH}`,
  },
};

export interface UpcomingMovies {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const template: string = "https://image.tmdb.org/t/p/w500";

const Home = () => {
  const { data, isLoading } = useQuery<UpcomingMovies>({
    queryKey: ["movies"],
    queryFn: () =>
      fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en&region=us",
        options
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return "Loading";
  }

  if (!data) {
    return "Something Went Wrong!";
  }

  const results: Result[] = data.results;
  return (
    <>
    <p className="flex justify-center items-center text-3xl font-bold mt-10">Movies</p>
    <div className="grid grid-cols-4 mt-10 gap-10 mx-20">
      {results.map((result) => (
        <div
          className="flex-col block shadow-lg shadow-gray-700 hover:shadow-green-200 rounded-xl font-bold p-2 mb-10 mr-4 scale-75"
          key={result.id}
        >
          <Image
            src={`${template}${result.poster_path}`}
            alt="Movie Poster"
            width={180}
            height={270}
            className="w-full"
          />
          <p className="truncate my-1 text-2xl">{result.title}</p>
          <p className="text-xl font-semibold text-gray-100">
            Popularity : {result.popularity.toFixed(0)}
          </p>
          <p className="text-xl text-gray-500 font-medium">
            {result.release_date.toString()}
          </p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Home;
