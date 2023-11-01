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

export type ModalProps = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    datasImg: {
        src: string;
        alt: string;
    }
}