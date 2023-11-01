import { useState, useEffect } from 'react'

export default function useDimension() {
    const [ dimension, setDimension ] = useState(window.innerWidth);
    const getWidth = () => { setDimension(window.innerWidth)};

    useEffect(() => {
        window.addEventListener('resize', getWidth);

        return () => {
            window.removeEventListener('resize', getWidth);
        }
    });

    return [dimension];
}
