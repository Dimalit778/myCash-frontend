import GridViewIcon from '@mui/icons-material/GridView';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
export const menuItems = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <GridViewIcon />,
    link: 'overview',
  },
  {
    id: 2,
    title: 'Epxenses',
    icon: <PaidOutlinedIcon />,
    link: 'expenses',
  },
  {
    id: 3,
    title: 'Incomes',
    icon: <PaymentsOutlinedIcon />,
    link: 'incomes',
  },
  {
    id: 4,
    title: 'account',
    icon: <AccountBoxOutlinedIcon />,
    link: 'account',
  },
];
