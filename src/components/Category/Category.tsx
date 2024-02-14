import { useEffect, useState } from "react";
import cat from "../../data/genres.json";
import movies from "../../data/popular.json";

import "./index.css";

interface Genres {
  id: number;
  name: string;
  genre_ids: number;
}
interface objType {
  id: number;
}
export default function Category({ setCategory }) {
  const [id, setId] = useState<number | null>(null);

  const moviesId = movies.map((e: Genres) => e.genre_ids).flat();
  const moviesFilter = moviesId.filter((id, indice, self) => {
    return self.indexOf(id) === indice;
  });

  const category = cat.map((e: Genres) => e);
  const filterData = category.filter((obj: objType) =>
    moviesFilter.includes(obj.id)
  );

  const result = filterData.map((category: Genres) => (
    <>
      <p key={category.id} onClick={() => passId(category.id)}>
        {category.name}
      </p>
    </>
  ));
  const passId = (categoryId: number) => {
    setId(categoryId);
  };
  useEffect(() => {
    setCategory(id);
  }, [id]);
  return (
    <>
      <div className="category">
        <p onClick={() => setId(moviesFilter.id)}>All Movies</p>
        <>{result}</>
      </div>
    </>
  );
}
