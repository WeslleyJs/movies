import MovieItem from "./MovieItem";
import movies from "../../data/popular.json";
import { useEffect, useState } from "react";
import Error from "../404/404";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  featured?: boolean;
  genre_ids: number;
}

interface MoviesListProps {
  showEmphasis: boolean | null;
  mov: Movie[];
  filterCategory: Movie[];
}
export default function MoviesList({
  showEmphasis,
  filterCategory,
  mov = [],
}: MoviesListProps) {
  const moviesItems = movies.map((movie: Movie) => (
    <MovieItem key={movie.id} movie={movie} boo={showEmphasis} />
  ));
  const categoryFilter = movies.filter((movie: Movie) => {
    return movie.genre_ids.includes(filterCategory);
  });
  const category = categoryFilter.map((movie: Movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  const movieSearch =
    mov?.map((movie: Movie) => (
      <MovieItem key={movie.id} movie={movie} boo={showEmphasis} search={mov} />
    )) || [];

  useEffect(() => {}, [showEmphasis, filterCategory, mov]);
  return (
    <>
      {!mov && !filterCategory && (
        <div className="movies-list">{moviesItems}</div>
      )}
      {mov && mov.length > 0 && (
        <div className="movies-list">{movieSearch}</div>
      )}
      {mov && mov.length === 0 && <Error />}
      {category && category.length > 0 && !mov && (
        <div className="movies-list">{category}</div>
      )}
    </>
  );
}
