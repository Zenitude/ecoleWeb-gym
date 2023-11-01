import { CardContainer, CardImage, CardDescription, CardTitle2, CardTitle3, CardPrice, CardText, CardLink } from "./Card.style";

type CardProps = {
    srcImg?: string;
    typeTitle: number;
    title: string;
    txt?: string;
    link?: string;
    href?: string;
    price?: number;
    items? : {
        txt: string;
        check: boolean;
    }[]
    check?: string;
    uncheck?: string;
}

export default function Card({srcImg, typeTitle, title, txt, link, href, price, check, uncheck, items}: CardProps) {
    return (
        <CardContainer>
            { srcImg && <CardImage src={srcImg} alt={title}/> }
            <CardDescription>
                {
                    typeTitle === 2 
                    ? (<CardTitle2>{title}</CardTitle2>)
                    : (<CardTitle3>{title}</CardTitle3>)
                }
                {txt && <CardText>{txt}</CardText>}
                {
                    price && <CardPrice className="price">
                        <strong>{price}</strong>
                        <sup>€</sup>
                        <span>/mois</span>
                    </CardPrice>
                }
                {items && (
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                <img src={item.check ? check : uncheck} alt={item.check ? "include" : "no include"} />
                                <span>{item.txt}</span>
                            </li>
                        ))}
                    </ul>
                )}
                { link && <CardLink href={href}>{link}</CardLink> }
            </CardDescription>
        </CardContainer>
    )
}
