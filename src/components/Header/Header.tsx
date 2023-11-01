/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { HeaderContainer, Navigation, ListNav } from "./Header.style";
import { HeaderProps } from "../../utils/types/types";
import { open, close } from "../../assets";

export default function Header({dimension} : HeaderProps) {
  const [ toggle, setToggle ] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const scrollHeader = () => {
    const header = headerRef.current;
    if(header) {
      if(window.innerHeight - window.scrollY < window.innerHeight) {
        header.style.background = `var(--main-black)`;
        header.style.borderBottom = `2px solid var(--main-white)`;
      }
      else if(window.innerHeight - window.scrollY === window.innerHeight) {
        header.style.background = `transparent`;
        header.style.borderBottom = `none`;
      }
    } 
  }
 
  useEffect(() => {
    setToggle(dimension > 320 ? false : toggle);
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    }
  }, [dimension]);

  return (
    <HeaderContainer ref={headerRef}>
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
            <img src={!toggle ? open : close} alt="" />
          </button>
        )
      }
    </HeaderContainer>
  )
}
