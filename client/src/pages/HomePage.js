import React from 'react';
import HomeTopBar from '../components/HomeTopBar';
import {observer} from 'mobx-react-lite';

const HomePage = () => {
    return (
        <div>
            <HomeTopBar/>
            <h1>HOME PAGE</h1>
        </div>
    );
};

export default observer(HomePage);
