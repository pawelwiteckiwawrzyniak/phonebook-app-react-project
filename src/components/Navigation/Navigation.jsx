import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

export const Navigation = () => {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'default',
            }}
          >
            PHONEBOOK
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {isLoggedIn ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem
                  key="home"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate('/');
                  }}
                >
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>

                <MenuItem
                  key="contacts"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate('/contacts');
                  }}
                >
                  <Typography textAlign="center">Contacts</Typography>
                </MenuItem>
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem
                  key="home"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate('/');
                  }}
                >
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem
                  key="login"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate('/login');
                  }}
                >
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>

                <MenuItem
                  key="register"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate('/register');
                  }}
                >
                  <Typography textAlign="center">Register</Typography>
                </MenuItem>
              </Menu>
            )}
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'default',
            }}
          >
            PHONEBOOK
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key="home"
              onClick={() => {
                handleCloseNavMenu();
                navigate('/');
              }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Home
            </Button>
            {isLoggedIn ? (
              <Button
                key="Contacts"
                onClick={() => {
                  handleCloseNavMenu();
                  navigate('/contacts');
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contacts
              </Button>
            ) : (
              <Fragment>
                <Button
                  key="register"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate('/register');
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Register
                </Button>
                <Button
                  key="login"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate('/login');
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Login
                </Button>
              </Fragment>
            )}
          </Box>
          {isLoggedIn ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip>
                <Button
                  onClick={handleOpenUserMenu}
                  sx={{
                    mr: 1,
                    fontFamily: 'roboto',
                    fontWeight: 500,
                    letterSpacing: '0.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: 17,
                  }}
                >
                  <p>{user.email}</p>
                </Button>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <UserMenu onClick={handleCloseUserMenu} />
              </Menu>
            </Box>
          ) : (
            <Fragment />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
