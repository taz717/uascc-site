import React from 'react';

import Mission from '../../components/frontPage/mission/Mission';


import './styles/HomePage.css'

function HomePage() {

    return (
        <div className='container' style={{
            marginTop: '5px',
            width: '100%',
            height: '100vh',
            position: 'fixed',
        }}>
            <Mission />
            {/* Gone till we have content */}
            {/* <Progress /> */}
        </div>
    );
}

export default HomePage;
