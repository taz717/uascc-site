import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// TODO add borders to profile pics

function Member({ member }) {
    return (
        <Card sx={{ maxWidth: 345, margin: '16px', marginLeft: '50px', marginRight: '50px' }}>
            <CardMedia
                variant="outlined"
                component="img"
                sx={{
                    height: 140, objectFit: 'contain', marginTop: '10px'
                }}
                image={member[1]}
                title={member[0]}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {member[0]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {member[2]}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Member;