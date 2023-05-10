import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Popover from '@mui/material/Popover';

// how to use:      
// call component with an array containing:
//   the title of the progress circle in location 0
//   the info of the progress circle in location  1


const myStyle = {
    minHeight: '150px',
    minWidth: '150px',
    m: '20px',
}

// this is the progress circle component
function ProgressCircle({ milestone }) {
    // this is the popover code
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return (
        <Box>
            <Fab sx={myStyle} onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
                <Typography>{milestone[0]}</Typography>
                <Popover
                    sx={{
                        pointerEvents: 'none',
                        margin: '5px'
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography sx={{ p: 1 }}>{milestone[1]}</Typography>
                </Popover>
            </Fab>
        </Box>
    );
}

export default ProgressCircle;
