import router from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../src/reducers';

const Ranking = () => {
    const { userInfo } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if(userInfo.email === null) router.push('/login');
    }, [userInfo.email]);
    
    if(!userInfo.email) return null;

    return (
        <div>ranking</div>
    )
}

export default Ranking;