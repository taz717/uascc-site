import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
                <Card sx={{ margin: '16px' }}>
                    <CardContent>
                        <iframe
                            title="Join Form"
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfNSCZPpI0ieE8p3tsccHMQLFG5HphU9oc8WZx4B3bzjD0FTg/viewform?embedded=true"
                            width="640"
                            height="2250"
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0">Loading…</iframe>
                    </CardContent>
                </Card>
            </Grid>
        </Grid >
    );
}

export default JoinPage;
