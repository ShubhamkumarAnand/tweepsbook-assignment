"use client";

import { useQuery } from "react-query";

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

const Home = () => {
  const { data, isLoading } = useQuery<UpcomingMovies>({
    queryKey: ["movies"],
    queryFn: () =>
      fetch("https://api.themoviedb.org/3/movie/upcoming", options).then(
        (res) => res.json()
      ),
  });

  if (isLoading || !data) {
    return "Something Went Wrong!";
  }

  const results: Result[] = data.results;
  return (
    <div className="flex-col p-5">
      {results.map((result) => (
        <p className="font-bold" key={result.id}>
          {result.title}
          {result.overview}
          {result.video}
        </p>
      ))}
    </div>
  );
};

export default Home;
