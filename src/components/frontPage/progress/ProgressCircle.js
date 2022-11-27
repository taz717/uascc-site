import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

const myStyle = {
    minHeight: '150px',
    minWidth: '150px',
    m: '20px',
}

const milestones = ['Milestone 1', 'Milestone 2', 'Milestone 3', 'Milestone 4']
const infoDict = { 'Milestone 1': 'This is the first milestone', 'Milestone 2': 'This is the second milestone', 'Milestone 3': 'This is the third milestone', 'Milestone 4': 'This is the fourth milestone' }

function ProgressCircle() {
    const [active, setActive] = useState(milestones[0]);

    return (
        <Box>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                {milestones.map((milestone) => (
                    <Fab key={milestone} sx={myStyle} onClick={() => setActive(milestone)}>
                        <Typography>{milestone}</Typography>
                    </Fab>))}
            </Grid>

            <Typography sx={{ mt: '10px' }}>{infoDict[active]}</Typography>
        </Box>
    );
}

export default ProgressCircle;
