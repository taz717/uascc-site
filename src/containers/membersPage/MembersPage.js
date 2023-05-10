import * as React from 'react';
import Grid from '@mui/material/Grid';

import Member from '../../components/members/Member';

import Bakbak from './styles/Bakbak.jpg'
import Optimus from './styles/Optimus.jpg'
import RJ from './styles/RJ.jpg'
import dhiraj from './styles/Dhiraj.jpg'


const infoDict = {
    m1: ['RJ', RJ, "Hi! My name is RJ and I’m one of the co-founders of this club and I’m " +
        "taking on the role of design lead. As an engineering student, you can find me drowning in " +
        " schoolwork in pretty much any building on campus. In my free time I like to go for runs with " +
        "my dog, work on my car, and spend time with my friends. I can’t wait to see what we can accomplish!"],

    m2: ['Dhiraj Meenavilli', dhiraj, "Hi, I'm Dhiraj. Currently in my second last year if CS doing mostly data " +
        "modeling courses. My minor is in econ, but I love finance, accounting, and all the rest of it. " +
        "I'm basically just a huge applied stats nerd, but I love talking shop about anything, even the stuff " +
        "I'm not too good at. And I love hearing people's stories and people's passions even if I don't fully understand them."],

    m3: ['Kareem Ali', Bakbak, "Hello! My name is Kareem and I am the co-founder and Project Management " +
        "Lead of this club! I just finished my fourth year of mechanical engineering at the UofA. During the year, " +
        "you’ll usually find me in ECERF playing codenames or procrastinating in some other way. In my free time, " +
        "I like to go bouldering, play games with my friends, and work on my car! I’m excited to see what our wonderful " +
        "team can achieve this year!"],


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
