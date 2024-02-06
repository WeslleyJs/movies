// const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  featured?: boolean;
}
interface MovieSearchProps {
  movie: Movie;
}
export default function MovieSearch({ movie }: MovieSearchProps) {
  console.log("meu movie", movie);
  return (
    <div>
      <h2> Resultado da Busca: </h2>
      <ul>
        <li>Deu certo</li>
      </ul>
    </div>
  );
}
