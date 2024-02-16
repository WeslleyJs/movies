import { useEffect, useState } from "react";
import Search from "../input/Search";
import { IoStarSharp, IoHomeOutline } from "react-icons/io5";
import Emphasis from "../input/Emphasis";
import "./Header.css";
import { Menubar } from "primereact/menubar";
import "primereact/resources/themes/lara-light-indigo/theme.css";

interface Movies {
  id: number;
  title: string;
  poster_path: string;
  featured?: boolean;
}

export default function Header({ valueEmphasis, searchValue }) {
  const [value, setValue] = useState(false);
  const [searchMovies, setSearchMovies] = useState<string>();
  const DataFromEmphasis = (data: boolean) => {
    valueEmphasis(data);
    setValue(data);
  };
  const getValueSearch = (data: Movies) => {
    setSearchMovies(data);
  };

  useEffect(() => {
    searchValue(searchMovies);
  }, [searchMovies]);
  const items = [
    {
      label: "Home",
      icon: <IoHomeOutline />,
    },
    {
      label: <Emphasis showEmphasis={DataFromEmphasis} />,
      icon: <IoStarSharp className={`${value ? "select-golden" : ""}`} />,
    },
  ];

  return (
    <div className="header-components">
      <Menubar className="list-menu" model={items} />
      <Search onSearch={getValueSearch} />
    </div>
  );
}
