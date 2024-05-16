import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay: number) => {
    const [data, setData] = useState(value);

    useEffect(() => {
        const ref = setTimeout(() => {
            setData(value);
        }, delay);

        return () => clearTimeout(ref);
    }, [value, delay]);

    return data;
};
