import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const mission = "The University of Alberta Solar Car Club consists of a SMALL TEAM, who have a BIG DREAM to THINK GREEN when it comes to researching ways to diversify energy in the world of transportation. Our mission is to design and construct a vehicle, fully powered by solar energy, to compete and race in international competitions. The bigger journey is the road to sustainability, where we aim to bring people of different knowledge backgrounds together to increase awareness and innovation of sustainable energy solutions. Our team is a place where everyone is welcome, no matter what their level  of expertise, and is a place where people can leave with more knowledge than they came with in the fields of science, engineering, corporate relations, and team building. We hope that what starts as a project car for races and competitions can more importantly contribute to future solutions in sustainable transportation for the general public."


function Mission() {
    return (
        <div>
            {/* <Container fixed> */}
            <Box sx={{ margin: 'auto', bgcolor: 'black', opacity: [0.9, 0.8, 0.7], height: '500px', width: '800px', marginTop: '50px', borderRadius: '5px' }} >
                <Typography sx={{ color: "white", marginTop: '5px', fontFamily: 'Monospace' }} variant='h1'>Mission</Typography>
                <Typography sx={{ color: "white", margin: '20px', fontFamily: 'Monospace' }}>{mission}</Typography>
            </Box>
            {/* </Container> */}
            {/* <Box sx={{ fontFamily: 'Monospace' }}>
                <Typography sx={{ color: "white", marginTop: '5px', fontFamily: 'Monospace' }} variant='h1'>Mission</Typography>
                <Typography sx={{ color: "white", fontFamily: 'Monospace' }}>Our Mission is to destory the decepticons</Typography>
            </Box> */}
        </div>
    );
}

export default Mission;
