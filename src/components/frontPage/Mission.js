import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function Mission() {
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
        }} bgcolor="black">
            <Typography sx={{ color: "white" }} variant='h3'>Mission</Typography>
        </Box>
    );
}

export default Mission;
