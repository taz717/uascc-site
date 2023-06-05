import * as React from 'react';
import Grid from '@mui/material/Grid';

import Member from '../../components/members/Member';

import RJ from './styles/RJ.jpg'
import dhiraj from './styles/Dhiraj.jpg'
import El from './styles/El.jpg'
import Eric from './styles/Eric.jpg'
import Kareem from './styles/Kareem.jpg'


const infoDict = {
    m1: ['RJ', RJ, "Hi! My name is RJ and I’m one of the co-founders of this club and I’m " +
        "taking on the role of design lead. As an engineering student, you can find me drowning in " +
        " schoolwork in pretty much any building on campus. In my free time I like to go for runs with " +
        "my dog, work on my car, and spend time with my friends. I can’t wait to see what we can accomplish!"],

    m2: ['Kareem Ali', Kareem, "Hello! My name is Kareem and I am the co-founder and Project Management " +
        "Lead of this club! I just finished my fourth year of mechanical engineering at the UofA. During the year, " +
        "you’ll usually find me in ECERF playing codenames or procrastinating in some other way. In my free time, " +
        "I like to go bouldering, play games with my friends, and work on my car! I’m excited to see what our wonderful " +
        "team can achieve this year!"],

    m3: ['Eric Peterson', Eric, "Hey Everyone! My name is Eric Petersen and I am the Membership Lead. Throughout the year," +
        "you’ll find me hanging around ECERF, researching in NREF, and spending time at Boulders Climbing gym beside MacEwan University." +
        "In my free time I like to play tennis, rock climb and ski! I am excited to be the main contact for anything electrical/solar" +
        "power related as I have a passion for the solar industry."],

    m4: ['Dhiraj Meenavilli', dhiraj, "Hi, I'm Dhiraj. Currently in my second last year if CS doing mostly data " +
        "modeling courses. My minor is in econ, but I love finance, accounting, and all the rest of it. " +
        "I'm basically just a huge applied stats nerd, but I love talking shop about anything, even the stuff " +
        "I'm not too good at. And I love hearing people's stories and people's passions even if I don't fully understand them."],


    m5: ['Labiba Raisa', El, "Hi! My name is Labiba and I'm the marketing lead. During the semester, you can usually find" +
        "me studying away in SUB. In my free time, I like to work out, go for walks around Kinsmen park, and try new foods." +
        "I'm excited to see our solar car come to reality and share our progress with the world!"],

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
                {/* takes the information and creates a Memeber component for each item */}
                {Object.keys(infoDict).map((key, index) => {
                    return <Member key={index} member={infoDict[key]} />
                })}
            </Grid>
        </div>
    );
}

export default MembersPage;
