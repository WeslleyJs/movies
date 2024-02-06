import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import movies from "../../data/popular.json";
import MovieItem from "../movies/MovieItem";
import MoviesList from "../movies/MoviesList";
import { AiOutlineSearch } from "react-icons/ai";
import "./index.css";

interface Movies {
  id: number;
  title: string;
  poster_path: string;
  featured?: boolean;
}

export default function FindMovie({ searchMovie }) {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Movies[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return setSearch("");
    const results = movies.filter((movie: Movies) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
    searchMovie(results);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          placeholder="PESQUISA"
          onChange={handleChange}
          value={search}
        />
        <button type="submit" className="button-search">
          <AiOutlineSearch />
        </button>
      </form>
    </>
  );
}
