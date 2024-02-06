import { useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import Search from "../input/Search";
import { IoStarSharp, IoHomeOutline } from "react-icons/io5";
import Emphasis from "../input/Emphasis";
import "./Header.css";
import { Menubar } from "primereact/menubar";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function Header({ valueEmphasis, searchValue }) {
  const [value, setValue] = useState(false);
  const DataFromEmphasis = (data: boolean) => {
    valueEmphasis(data);
    setValue(data);
  };
  const getValueSearch = (data) => {
    searchValue(data);
  };

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
      <Menubar className="teste" model={items} />
      <Search searchMovie={getValueSearch} />
    </div>
  );
}