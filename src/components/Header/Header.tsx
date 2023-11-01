import { useState, useEffect } from "react";
import { HeaderContainer, Navigation, ListNav } from "./Header.style";

type PropsHeader = {
  dimension: number;
}

export default function Header({dimension} : PropsHeader) {
  const [ toggle, setToggle ] = useState(false);
 
  useEffect(() => {
    setToggle(dimension > 320 ? false : toggle);
  }, [dimension]);

  return (
    <HeaderContainer>
      {
        (dimension >= 325) || (dimension < 325 && toggle === true) ? (
          <Navigation>
            <ListNav>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#equipment">Matériel</a></li>
              <li><a href="#prices">Tarifs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ListNav>
          </Navigation>
        ) : ('')
      }
      {
        dimension < 325 && (
          <button className="menu" onClick={() => setToggle(!toggle)}>
            Toggle
          </button>
        )
      }
    </HeaderContainer>
  )
}
