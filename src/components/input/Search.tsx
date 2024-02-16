import {
  useState,
  FormEvent,
  ChangeEvent,
  useEffect,
  useCallback,
} from "react";
import movies from "../../data/popular.json";
import { AiOutlineSearch } from "react-icons/ai";
import "./index.css";

interface Movies {
  title: string;
}

export default function FindMovie({ onSearch }) {
  const [search, setSearch] = useState<string | undefined>("");

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!search || search.length === 1) {
        onSearch(null);
        return;
      }
      const results = movies.filter((movie: Movies) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      onSearch(results);
    },
    [search, onSearch]
  );
  return (
    <>
      <form onSubmit={handleSubmit} className="form-search">
        <input
          type="text"
          placeholder="SEARCH"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="form-input"
        />
        <button type="submit" className="button-search">
          <AiOutlineSearch />
        </button>
      </form>
    </>
  );
}
