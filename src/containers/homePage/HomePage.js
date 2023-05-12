import * as React from 'react';
import Box from '@mui/material/Box';

// import Funding from '../../components/frontPage/Funding'
import Mission from '../../components/frontPage/mission/Mission'
import Progress from '../../components/frontPage/progress/Progress'
import Values from '../../components/frontPage/Values'

// removed scroll snap because I find it uncessary and more annoying than helpful
// TODO swap funding component to a container

function HomePage() {

    return (
        <Box>
            <Mission />
            <Values />
            <Progress />
            {/* <Funding /> */}
        </Box>
    );
}

export default HomePage;
