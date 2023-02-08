import React from "react";
import { MovieLink } from "./movie.type";
import { IMAGE_PATH, MOVIE_HOST } from "@/utils/constant";
import Image from "next/image";
const Movie = async ({ params }: MovieLink) => {
  const _id = params.movie;
  console.log("_id", _id, process.env.API_KEY);
  const movie = await fetch(
    `${MOVIE_HOST}/movie/${_id}?api_key=${process.env.API_KEY}`
  );
  const res = await movie.json();
  console.log("results", res);
  const {
    title,
    id,
    backdrop_path,
    poster_path,
    release_date,
    popularity,
    overview,
  } = res;
  return (
    <div className="min-h-screen">
      <div className="relative">
        <Image
          src={IMAGE_PATH + backdrop_path}
          width={1000}
          height={1000}
          alt={title}
          className="w-full h-[100vh] object-cover"
          priority
        />
        <div className="bg-gradient-to-t from-slate-900 absolute bottom-0 right-0 left-0 pb-10 pt-16 pr-10">
          <h1 className="text-6xl  font-bold text-right   text-white">
            {title}
          </h1>
          <h2 className="text-2xl  text-right text-white ">{release_date}</h2>
          <h2 className="text-right text-white">{popularity}</h2>
        </div>
      </div>
    </div>
  );
};

export default Movie;
