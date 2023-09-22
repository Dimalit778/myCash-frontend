import {
  AccountBox,
  ChevronLeft,
  CurrencyExchange,
  Dashboard,
  Logout,
  Payment,
  SettingsApplications,
} from '@mui/icons-material';
// import MonetizationOnIcon from '@mui/icons-material';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';

import incomeIcon from '../../assets/manuIcons/incomeIcom.png';
import accountIcon from '../../assets/manuIcons/accountIcon.png';
import dashIcon1 from '../../assets/manuIcons/dashIcon1.png';
import dashIcon2 from '../../assets/manuIcons/dashIcon2.png';
import expenseIcon from '../../assets/manuIcons/expenseIcon.png';
import settingIcon from '../../assets/manuIcons/settingIcon.png';
import contactIcon from '../../assets/manuIcons/contact.png';
import logoutIcon from '../../assets/manuIcons/logoutIcon.png';

import MuiDrawer from '@mui/material/Drawer';
import { useMemo, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const NavSideList = ({ open, setOpen }) => {
  const [selectedLink, setSelectedLink] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  // List of nav side components
  const list = useMemo(
    () => [
      {
        title: 'Main',
        icon: <img src={dashIcon2} alt="" />,
        link: '',
      },

      {
        title: 'Expenses',
        icon: <img src={expenseIcon} alt="" />,
        link: 'expenses',
      },
      {
        title: 'Incomes',
        icon: <img src={incomeIcon} alt="" />,
        link: 'incomes',
      },
      {
        title: 'Account',
        icon: <img src={accountIcon} alt="" />,
        link: 'account',
      },
      {
        title: 'Contact',
        icon: <img src={contactIcon} alt="" />,
        link: 'contact',
      },
      {
        title: 'Settings',
        icon: <img src={settingIcon} alt="" />,
        link: 'settings',
      },
    ],
    []
  );

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {list.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => navigate(item.link)}
                selected={selectedLink === item.link}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ mx: 'auto', mt: 3, mb: 1 }}>
          <Tooltip title="test">
            <Avatar {...(open && { sx: { width: 100, height: 100 } })} />
          </Tooltip>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          {/* {open && <Typography>{user.firstName}</Typography>} */}
          <Typography variant="body2"> {user.firstName}</Typography>
          {open && <Typography variant="body2">{user.email}</Typography>}
          <Tooltip title="Logout" sx={{ mt: 1 }}>
            <IconButton onClick={handleLogout}>
              <img src={logoutIcon} alt="" />
            </IconButton>
          </Tooltip>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* Outlet - Display all components */}
        <Outlet />
        <Footer />
      </Box>
    </>
  );
};

export default NavSideList;
