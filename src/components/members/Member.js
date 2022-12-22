import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Member({ member }) {
    console.log(member)
    return (
        <div style={{
            width: '100%',
            height: '100vh - 64px'
        }}>
            <Paper elavation={3}>
                <Grid direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Typography variant='h3'>{member[0]}</Typography>
                    <img style={{
                        height: '100px',
                        width: '100px',
                    }} src={member[1]} />
                </Grid>
            </Paper>
        </div>
    );
}

export default Member;