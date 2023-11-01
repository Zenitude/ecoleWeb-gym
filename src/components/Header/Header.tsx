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
    const navigation = header!.children[0].children[0] as HTMLUListElement;
    if(header) {
      if(window.scrollY > 50) {
        header.style.background = `var(--main-black)`;
        navigation.style.background = `var(--main-black)`;
        navigation.style.borderBottom = `2px solid var(--main-white)`;
      }
      else if(window.scrollY === 0) {
        header.style.background = `transparent`;
        navigation.style.background = `transparent`;
        navigation.style.borderBottom = `none`;
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
