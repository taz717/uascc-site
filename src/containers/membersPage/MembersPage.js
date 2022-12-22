import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Member from '../../components/members/Member';

import Bakbak from './styles/Bakbak.jpg'
import Optimus from './styles/Optimus.jpg'

const infoDict = {
    m1: ['Bak-Bak the Lethal', Bakbak],
    m2: ['Optimus Prime', Optimus],

}

function MembersPage() {
    return (
        <div>
            <Box>MembersPage</Box>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                {Object.keys(infoDict).map((key, index) => {
                    return <Member key={index} member={infoDict[key]} />
                })}
            </Grid>
        </div>
    );
}

export default MembersPage;
