import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProgressCircle from './ProgressCircle';


function Progress() {
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
        }}>
            <Typography variant='h3'>Progress</Typography>
            <ProgressCircle />
        </Box>
    );
}

export default Progress;
