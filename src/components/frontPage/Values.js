import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

// placeholder for now
// probably delete later (same as mission)

function Values() {
    return (
        <Paper sx={{
            width: '100%',
            height: '100vh',
            background: 'black',
        }}>
            <Typography sx={{ color: "white", marginBottom: "25px" }} variant='h3'>Values</Typography>
            <Typography sx={{ color: "white" }} variant='p'>decepticons bad, autobots good</Typography>
        </Paper>
    );
}

export default Values;

