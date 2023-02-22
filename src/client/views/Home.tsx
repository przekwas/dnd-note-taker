import React from 'react';
import { useAuth } from '../utilities/use-auth';

interface HomeProps {}

const Home = (props: HomeProps) => {
    const { authenticated } = useAuth();

    return (
        <div>
            <h1>Home {authenticated ? 'logged in' : 'logged out' }</h1>
        </div>
    );
}

export default Home;