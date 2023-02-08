import { MOVIE_HOST } from "@/utils/constant";
import React from "react";
import MovieCard from "../components/movieCard/movieCard";

async function Home() {
  const movie = await fetch(
    `${MOVIE_HOST}/movie/popular?api_key=${process.env.API_KEY}`
  );
  const { results } = await movie.json();
  return (
    <div className="min-h-screen container mx-auto my-10 ">
      <div className="grid grid-cols-fluid gap-16 mx-10">
        {(results || []).map((movie: any) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
