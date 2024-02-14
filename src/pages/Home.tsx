import { useEffect, useState } from "react";
import Category from "../components/Category/Category";
import Header from "../components/layout/Header";
import MoviesList from "../components/movies/MoviesList";
export default function Home() {
  const [value, setValue] = useState<boolean>(false);
  const [search, setSearch] = useState(null);
  const [cat, setCat] = useState(null);
  const valueFromEmphasis = (data: boolean) => {
    setValue(data);
  };
  const movie = (data) => {
    setSearch(data);
  };
  const category = (data) => {
    setCat(data);
  };
  useEffect(() => {
    if (search === " ") setSearch(null);
  }, [search]);
  return (
    <>
      <Header valueEmphasis={valueFromEmphasis} searchValue={movie} />
      <Category setCategory={category} />
      <MoviesList showEmphasis={value} mov={search} filterCategory={cat} />
    </>
  );
}
