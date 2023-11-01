import { useState } from "react";
import { LayoutContainer } from "./Layout.style";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Home from "../../views/Home/Home";
import Footer from "../Footer/Footer";
import useDimension from "../../utils/hooks/useDimension";
import { dataHero } from "../../utils/datas/hero";

export default function Layout() {
    const [ hero ] = useState(true);
    const [ dimension ] = useDimension();
    
    return (
    <LayoutContainer id="home">
        { hero
            ? (
                <Hero title={dataHero.title} subtitles={dataHero.subtitles} paragraphs={dataHero.paragraphs} links={dataHero.links} buttons={dataHero.buttons}>
                    <Header dimension={dimension} />
                </Hero>
            ) 
            : (<Header dimension={dimension} />)
        }
        <Home />
        <Footer />
    </LayoutContainer>
    )
}
