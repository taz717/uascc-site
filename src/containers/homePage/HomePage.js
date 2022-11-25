import * as React from 'react';
import Box from '@mui/material/Box';

import Funding from '../../components/frontPage/Funding'
import Mission from '../../components/frontPage/Mission'
import Progress from '../../components/frontPage/Progress'
import Values from '../../components/frontPage/Values'

function HomePage() {
    return (
        <Box>
            <Mission />
            <Progress />
            <Values />
            <Funding />
        </Box>
    );
}

export default HomePage;
