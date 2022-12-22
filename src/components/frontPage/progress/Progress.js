import * as React from 'react';
import Typography from '@mui/material/Typography';
import ProgressCircle from './ProgressCircle';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const infoDict = {
    m1: ['Milestone 1', 'This is the first milestone'],
    m2: ['Milestone 2', 'This is the second milestone'],
    m3: ['Milestone 3', 'This is the third milestone'],
    m4: ['Milestone 4', 'This is the fourth milestone']
}

// TODO:
// add paper for circles
// swap boxes with paper for all 4 main components
// scroll snap for members
// add members
// add donate + donate link
// add join + join link

function Progress() {
    return (
        <Paper elevation={3} sx={{
            width: '100%',
            height: '100vh',
        }}>
            <Typography variant='h3'>Progress</Typography>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                {Object.keys(infoDict).map((key, index) => {
                    return <ProgressCircle key={index} milestone={infoDict[key]} />
                })}
            </Grid>
        </Paper >
    );
}

export default Progress;
