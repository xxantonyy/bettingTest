import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router';

const Error = memo(() => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/', { replace: true });
    }, [navigate]);
    return <div />;
});

export default Error;
