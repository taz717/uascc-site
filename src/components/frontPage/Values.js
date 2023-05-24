import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Values() {
    return (
        <Box
            sx={{
                height: '100vh',
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
                Values
            </Typography>
            <Typography variant="body1">
                Our values are an integral part of who we are. They guide us in our
                actions and decisions, and help us create a positive impact on the
                world.
            </Typography>
        </Box>
    );
}
