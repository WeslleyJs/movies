import ModalMovie from "../modal/ModalMovie";

import "./index.css";
const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
interface Movie {
  title: string;
  id: number;
  poster_path: string;
  featured?: boolean;
  genre_ids: number;
}

interface MovieItems {
  movie: Movie;
  boo: boolean;
}
export default function MovieItem({ movie, boo }: MovieItems) {
  return (
    <>
      {boo && movie.featured && (
        <>
          <div className="movie-item card">
            <header className="movie-item-header">
              <img
                className="movie-item__poster"
                src={assetsUrl + movie.poster_path}
                alt=""
                draggable={false}
              />
              {movie.featured && (
                <span className="movie-item__badge">Em destaque</span>
              )}
              <div className="modal-movie-btn">
                <ModalMovie movie={movie} />
              </div>
            </header>
          </div>
        </>
      )}
      {!boo && (
        <>
          <div className="movie-item card">
            <header className="movie-item-header">
              <img
                className="movie-item__poster"
                src={assetsUrl + movie.poster_path}
                alt=""
                draggable={false}
              />
              {movie.featured && (
                <span className="movie-item__badge">Em destaque</span>
              )}
            </header>
            <div className="modal-movie-btn">
              <ModalMovie movie={movie} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
