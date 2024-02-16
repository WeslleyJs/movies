import { useEffect, useState } from "react";
import Category from "../components/Category/Category";
import Header from "../components/layout/Header";
import MoviesList from "../components/movies/MoviesList";

interface searchMovie {
  data: string;
}
export default function Home() {
  const [value, setValue] = useState<boolean>(false);
  const [mov, setMov] = useState<string>();
  const [filterCategory, setFilterCategory] = useState<number>(null);
  const valueFromEmphasis = (data: boolean) => {
    setValue(data);
  };
  const movie = (data: searchMovie) => {
    setMov(data);
  };
  const category = (data: number) => {
    setFilterCategory(data);
  };
  useEffect(() => {
    setMov(mov);
  }, [mov]);
  return (
    <>
      <Header valueEmphasis={valueFromEmphasis} searchValue={movie} />
      <Category setCategory={category} />
      <MoviesList
        showEmphasis={value}
        mov={mov}
        filterCategory={filterCategory}
      />
    </>
  );
}
