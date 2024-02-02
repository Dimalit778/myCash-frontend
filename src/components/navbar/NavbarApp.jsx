import { styled } from '@mui/material/styles';
import {
  Box,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  Tooltip,
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';
import NavSideList from './NavSideList';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

//@ ---- >  NavBar on User Dashboard

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'rgb(196, 206, 207)',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function NavbarApp() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const navigate = useNavigate();

  return (
    // <ThemeProvider>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {/* IF USER EXIST */}

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
              color: 'black',
            }}
          >
            <Menu />
          </IconButton>
          <Tooltip title="Go back to home page">
            <IconButton sx={{ mr: 1 }} onClick={() => navigate('/')}>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/officel/80/000000/money-bag.png"
                alt="money-bag"
              />
            </IconButton>
          </Tooltip>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, color: 'black' }}
          >
            MyCash
          </Typography>
        </Toolbar>
      </AppBar>
      {/* --- NavSideList Display Nav side and components ----*/}
      <NavSideList {...{ open, setOpen }} />
    </Box>
    // </ThemeProvider>
  );
}
