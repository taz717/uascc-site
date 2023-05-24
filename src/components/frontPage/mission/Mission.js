import * as React from 'react';
import Typography from '@mui/material/Typography';

// import './styles/Mission.css'

function Mission() {
    return (
        // <div className='container' style={{
        //     width: '100%',
        //     height: '100vh'
        // }}>
        <div>
            <Typography sx={{ color: "white", marginTop: '5px' }} variant='h3'>Mission</Typography>
            <Typography sx={{ color: "white" }}>Our Mission is to destory the decepticons</Typography>
        </div>
        // </div>
    );
}

export default Mission;
