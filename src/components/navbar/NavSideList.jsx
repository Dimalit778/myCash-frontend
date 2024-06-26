import { ChevronLeft } from '@mui/icons-material';

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

import incomeIcon from 'assets/manuIcons/incomeIcom.png';
import dashIcon2 from 'assets/manuIcons/dashIcon2.png';
import expenseIcon from 'assets/manuIcons/expenseIcon.png';
import settingIcon from 'assets/manuIcons/settingIcon.png';
import contactIcon from 'assets/manuIcons/contact.png';
import logoutIcon from 'assets/manuIcons/logoutIcon.png';

import MuiDrawer from '@mui/material/Drawer';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from 'api/slicesApi/userApiSlice';
import { logout } from 'api/slicesApi/authSlice';
import { Image, Transformation } from 'cloudinary-react';
import axios from 'axios';

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
  backgroundColor: 'rgb(196, 206, 207)',
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
  axios.defaults.withCredentials = true;
  // GET URL PATH
  const { pathname } = useLocation();
  const pathLink = pathname.substring(pathname.lastIndexOf('/') + 1);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // CHECK IF user Token Is Exist
  // if cookie Token expried Navigate to Login page
  useEffect(() => {
    const fetchUser = async () => {
      try {
        await axios.get(
          'https://mycash-ra2a-yxco.onrender.com/api/users/getUser'
        );
      } catch (error) {
        dispatch(logout());
        navigate('/login');
      }
    };
    fetchUser();
  }, [pathLink]);

  const [selectedLink, setSelectedLink] = useState(pathLink);

  const [logoutApiCall] = useLogoutMutation();

  // ----->  List of nav side components
  const list = [
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
      title: 'Contact',
      icon: <img src={contactIcon} alt="" />,
      link: 'contact',
    },
    {
      title: 'Settings',
      icon: <img src={settingIcon} alt="" />,
      link: 'settings',
    },
  ];

  // ? Logout user
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        {/* [ Divider ] -- { Nav side => component List } -- */}
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
                onClick={() => navigate(item.link, setSelectedLink(item.link))}
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
        {/*//? BOX => User image || Avatar icon */}
        <Box sx={{ mx: 'auto', mt: 3, mb: 1 }}>
          {userInfo.imageUrl && !open && (
            <Image cloudName="dx6oxmki4" publicId={userInfo.imageUrl}>
              <Transformation
                width="50"
                height="50"
                gravity="auto"
                crop="fill"
                radius="max"
              />
            </Image>
          )}
          {userInfo.imageUrl && open && (
            <Image cloudName="dx6oxmki4" publicId={userInfo.imageUrl}>
              <Transformation
                width="150"
                height="150"
                gravity="auto"
                crop="fill"
                radius="max"
              />
            </Image>
          )}
          {!userInfo.imageUrl && (
            <Avatar {...(open && { sx: { width: 100, height: 100 } })} />
          )}
        </Box>
        {/* [ BOX ] -- { Nav side => bottom user info } -- */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2"> {userInfo.name}</Typography>
          {open && <Typography variant="body2">{userInfo.email}</Typography>}
          <Tooltip title="Logout" sx={{ mt: 1 }}>
            <IconButton onClick={logoutHandler}>
              <img src={logoutIcon} alt="logout" />
            </IconButton>
          </Tooltip>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }} width={'80%'}>
        <DrawerHeader />
        {/* Outlet - Display all components */}

        <Outlet />
        <Footer />
      </Box>
    </>
  );
};

export default NavSideList;
