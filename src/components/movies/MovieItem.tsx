import ModalMovie from "../modal/ModalMovie";
import "./index.css";
const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
interface Movie {
  title: string;
  poster_path: string;
  featured: boolean;
  id: number;
}

interface MovieItems {
  movie: Movie;
  boo: boolean;
  mov: Movie[];
}
export default function MovieItem({ movie, boo, mov }: MovieItems) {
  return (
    <>
      {boo && movie.featured && (
        <div className="movie-item show-details-header">
          <header className="movie-item-header show-details-header">
            <img
              className="movie-item__poster"
              src={assetsUrl + movie.poster_path}
              alt=""
              draggable={false}
            />
            <ModalMovie className="show-details" />
            {movie.featured && (
              <span className="movie-item__badge">Em destaque</span>
            )}
          </header>
        </div>
      )}

      {!boo && (
        <div className="movie-item card">
          <header className="movie-item-header">
            <img
              className="movie-item__poster"
              src={assetsUrl + movie.poster_path}
              alt=""
              draggable={false}
            />
            <ModalMovie className="movie-modal" />
            {movie.featured && (
              <span className="movie-item__badge">Em destaque</span>
            )}
          </header>
          {!boo && mov && <h1>Ola</h1>}
        </div>
      )}
    </>
  );
}
