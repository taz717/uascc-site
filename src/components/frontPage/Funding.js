import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// addressing sponsers
// and stuff probably

function Funding() {
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
        }}>
            <Typography sx={{ marginBottom: "25px" }} variant='h3'>Funding</Typography>
            <Typography variant='p'>Here is my paypal - @givememoney.com</Typography>
        </Box>
    );
}

export default Funding;
