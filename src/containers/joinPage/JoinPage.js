import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function JoinPage() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >

            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345, margin: '16px' }}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Join our club!
                        </Typography>
                        <Typography variant="body2" component="p">
                            We are excited to have you join our club. Please fill out the form to get started.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default JoinPage;
