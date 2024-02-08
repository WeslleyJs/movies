import MovieItem from "./MovieItem";
import movies from "../../data/popular.json";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  featured?: boolean;
}

interface MoviesListProps {
  showEmphasis: boolean | null;
  mov: Movie[] | null;
}
export default function MoviesList({
  showEmphasis,
  mov = [],
}: MoviesListProps) {
  console.log(mov?.length);
  const moviesItems = movies.map((movie: Movie) => (
    <MovieItem key={movie.id} movie={movie} boo={showEmphasis} />
  ));
  const movieSearch =
    mov?.map((movie: Movie) => (
      <MovieItem key={movie.id} movie={movie} boo={showEmphasis} search={mov} />
    )) || [];

  return (
    <>
      {mov && mov.length > 0 && (
        <div className="movies-list">{movieSearch}</div>
      )}
      {!mov && <div className="movies-list">{moviesItems}</div>}
    </>
  );
}
