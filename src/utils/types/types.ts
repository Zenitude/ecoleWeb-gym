export type HeaderProps = {
    dimension: number;
}

export type FieldProps = {
    type: string;
    id: string;
    txt: string;
    placeholder?: string;
}

export type HeroProps = {
    children: React.ReactNode;
    title: string;
    subtitles?: {
        balise: number;
        txt: string;
    }[];
    paragraphs?: {
        txt: string;
    }[];
    links?: {
        txt: string;
        href: string;
    }[];
    buttons?: {
        txt: string;
    }[]
}
