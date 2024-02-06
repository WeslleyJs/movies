import { RiHome2Line } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { IoStarSharp } from "react-icons/io5";
import Emphasis from "../input/Emphasis";
import { Menubar } from "primereact/menubar";
import "./Header.css";
import { useState } from "react";

export default function Header({ valueEmphasis }) {
  const [value, setValue] = useState(false);
  const DataFromEmphasis = (data: boolean) => {
    valueEmphasis(data);
    setValue(data);
  };

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Features",
      icon: "pi pi-star",
    },
    {
      label: "Projects",
      icon: "pi pi-search",
      items: [
        {
          label: "Components",
          icon: "pi pi-bolt",
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
    },
  ];

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  );
}

//   return (
//     <>
//       <header className="header-components">
//         <ul className="list-select">
//           <li>Logo</li>
//           <li>
//             <RiHome2Line /> Início
//           </li>
//           <li>
//             <IoStarSharp className={`${value ? "select-golden" : ""}`} />{" "}
//             <Emphasis showEmphasis={DataFromEmphasis} />
//           </li>
//           <li>
//             <AiOutlineSearch />
//             Pesquisa
//           </li>
//         </ul>
//       </header>
//     </>
//   );
// }
/* 
    ## PUXAR COMPONENTES FUNCIONAIS PARA O HEADER
    ## O HEADER VAI  PASSAR AS INFORMAÇÕES PARA O COMPONENTE DO BODY

    ## NECESSÁRIO SEPARAR AS FUNCIONALIDADES DO COMPONENETE Search.tsx
    ## CRIAR UM COMPONENETE CHAMADA Featured.tsx 

*/
