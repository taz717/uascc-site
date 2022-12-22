import * as React from 'react';
import Typography from '@mui/material/Typography';

import './styles/Mission.css'

function Mission() {
    return (
        <div className='container' style={{
            width: '100%',
            height: '100vh'
        }}>
            {/* <Box sx={{
                width: '100%',
                height: '100vh',
            }}> */}
            <div>
                <Typography sx={{ color: "white" }} variant='h3'>Mission</Typography>
                <Typography sx={{ color: "white" }}>Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Typography>
                {/* </Box> */}
            </div>
        </div>
    );
}

export default Mission;
