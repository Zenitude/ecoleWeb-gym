import { HeroContainer } from "./Hero.style";
import { HeroProps } from "../../utils/types/types";

export default function Hero({children, title, subtitles, paragraphs, links, buttons} : HeroProps) {
  return (
    <HeroContainer>
        {children}
        <h1>{title}</h1>
        {
            (subtitles && subtitles.length > 0)
            ? (
                subtitles.map((subtitle, index) => (
                    subtitle.balise === 2
                    ? (<h2 key={index} >{subtitle.txt}</h2>)
                    : (<h3 key={index} >{subtitle.txt}</h3>)
                ))
            )
            : ('')
        }
        { 
            (paragraphs && paragraphs.length > 0)
            ? (
                paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph.txt}</p>
                ))
            )
            : ('')
        }
        <div className="actions">
            {
                (links && links.length > 0)
                ? (
                    links.map((link, index) => (
                        <a key={index} href={link.href}>{link.txt}</a>
                    ))
                )
                : ('')
            }

            { 
                (buttons && buttons.length > 0)
                ? (
                    buttons.map((button, index) => (
                        <button key={index}>{button.txt}</button>
                    ))
                )
                : ('')
            }
        </div>

    </HeroContainer>
  )
}
