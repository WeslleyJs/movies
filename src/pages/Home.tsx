import { useState } from "react";
import Header from "../components/layout/Header";
import MoviesList from "../components/movies/MoviesList";
export default function Home() {
  const [value, setValue] = useState<boolean>(false);
  const [search, setSearch] = useState(null);
  const valueFromEmphasis = (data: boolean) => {
    setValue(data);
  };
  const movie = (data) => {
    setSearch(data);
  };
  return (
    <>
      <Header valueEmphasis={valueFromEmphasis} searchValue={movie} />
      <MoviesList showEmphasis={value} mov={search} />
    </>
  );
}
