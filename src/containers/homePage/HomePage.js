import * as React from 'react';
import { useRef } from "react";
import Box from '@mui/material/Box';
import useScrollSnap from "react-use-scroll-snap";

import Funding from '../../components/frontPage/Funding'
import Mission from '../../components/frontPage/Mission'
import Progress from '../../components/frontPage/progress/Progress'
import Values from '../../components/frontPage/Values'

function HomePage() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 50, delay: 50 });

    return (
        <Box ref={scrollRef}>
            <div >
                <Mission />
            </div>
            <div>
                <Progress />
            </div>
            <div>
                <Values />
            </div>
            <div>
                <Funding />
            </div>
        </Box>
    );
}

export default HomePage;
