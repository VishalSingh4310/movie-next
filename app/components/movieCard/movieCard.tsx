import React, { FC } from "react";
import { MovieCardProps } from "./movieCard.types";
import Image from "next/image";
import { IMAGE_PATH } from "@/utils/constant";
import Link from "next/link";

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const {
    title,
    id,
    backdrop_path,
    poster_path,
    release_date,
    popularity,
    overview,
  } = movie;
  console.log("id", id);
  return (
    <div>
      <Link href={`/${id}`}>
        <>
          <Image
            src={IMAGE_PATH + backdrop_path}
            width={800}
            height={800}
            alt={title}
          />
          <h2>{title}</h2>
          <h2>{release_date}</h2>
          <h2>{popularity}</h2>
        </>
      </Link>
    </div>
  );
};

export default MovieCard;
