import router from 'next/router';
import { useEffect } from 'react';

const Ranking = () => {
    useEffect(() => {
        router.push('/login');
    }, []);

    return (
        <div>랭킹페이지</div>
    )
}

export default Ranking;