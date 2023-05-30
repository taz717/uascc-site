import * as React from 'react';
import Typography from '@mui/material/Typography';
import ProgressCircle from './ProgressCircle';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const infoDict = {
    m1: ['Milestone 1', 'This is the first milestone'],
    m2: ['Milestone 2', 'This is the second milestone'],
    m3: ['Milestone 3', 'This is the third milestone'],
    m4: ['Milestone 4', 'This is the fourth milestone']
};

function Progress() {
    return (
        <Box sx={{ height: '80vh', }}>
            <Typography variant="h4" sx={{ marginBottom: '1rem', marginTop: '20px' }}>
                Progress
            </Typography>
            <Grid container spacing={2}>
                {Object.keys(infoDict).map((key, index) => {
                    return (
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <ProgressCircle milestone={infoDict[key]} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default Progress;
