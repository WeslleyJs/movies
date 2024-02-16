import { useEffect, useState } from "react";
import Category from "../components/Category/Category";
import Header from "../components/layout/Header";
import MoviesList from "../components/movies/MoviesList";

interface Movies {
  id: number;
  title: string;
  poster_path: string;
  featured?: boolean;
}
interface searchMovie {
  data: string;
}
export default function Home() {
  const [value, setValue] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<string>();
  const [cat, setCat] = useState(null);
  const valueFromEmphasis = (data: boolean) => {
    setValue(data);
  };
  const movie = (data: searchMovie) => {
    setSearchResults(data);
  };
  const category = (data) => {
    setCat(data);
  };
  useEffect(() => {
    setSearchResults(searchResults);
  }, [searchResults]);
  return (
    <>
      <Header valueEmphasis={valueFromEmphasis} searchValue={movie} />
      <Category setCategory={category} />
      <MoviesList
        showEmphasis={value}
        mov={searchResults}
        filterCategory={cat}
      />
    </>
  );
}
