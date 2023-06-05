import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { DirectionsCar } from '@mui/icons-material';

const pages = ['Members', 'Join'];
// God I hate this

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#131518" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* DESKTOP VIEW START */}

          <Link href="/#/" color="inherit">
            <DirectionsCar sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            UASCC
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={"#/" + page.toLowerCase()}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* DESKTOP VIEW END */}
          {/* PHONE VIEW START */}

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'flex', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <Link key={page} href={"#/" + page.toLowerCase()} color="inherit" underline="none">
                <MenuItem key={page} onClick={handleCloseNavMenu}  >
                  <Typography href={"#/" + page.toLowerCase()} textAlign="center">{page}</Typography>
                </MenuItem>
              </Link>
            ))}
          </Menu>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            UASCC
          </Typography>

          {/* PHONE VIEW END */}

        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default ResponsiveAppBar;
