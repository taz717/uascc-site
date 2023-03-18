import * as React from 'react';
import Grid from '@mui/material/Grid';

import Member from '../../components/members/Member';

import Bakbak from './styles/Bakbak.jpg'
import Optimus from './styles/Optimus.jpg'


const infoDict = {
    m1: ['Bak-Bak the Lethal', Bakbak, "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "],
    m2: ['Optimus Prime', Optimus, "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "],
    m3: ['Bak-Bak the Lethal', Bakbak, "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "],
    m4: ['Optimus Prime', Optimus, "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "],
    m5: ['Bak-Bak the Lethal', Bakbak, "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "],
    m6: ['Optimus Prime', Optimus, "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "],
    m7: ['Bak-Bak the Lethal', Bakbak, "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "],
    m8: ['Optimus Prime', Optimus, "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "],
    m9: ['Bak-Bak the Lethal', Bakbak, "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "],
    m10: ['Optimus Prime', Optimus, "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "],

}
function MembersPage() {
    return (
        <div>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="left"
                spacing={2}
                sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
            >
                {Object.keys(infoDict).map((key, index) => {
                    return <Member key={index} member={infoDict[key]} />
                })}
            </Grid>
        </div>
    );
}

export default MembersPage;
