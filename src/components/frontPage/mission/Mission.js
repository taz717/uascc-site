import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';


function Mission() {
    return (
        <div>
            <Container fixed>
                <Box sx={{ bgcolor: '#cfe8fc', height: '500px', marginTop: '50px' }} />
            </Container>
            {/* <Box sx={{ fontFamily: 'Monospace' }}>
                <Typography sx={{ color: "white", marginTop: '5px', fontFamily: 'Monospace' }} variant='h1'>Mission</Typography>
                <Typography sx={{ color: "white", fontFamily: 'Monospace' }}>Our Mission is to destory the decepticons</Typography>
            </Box> */}
        </div>
    );
}

export default Mission;
