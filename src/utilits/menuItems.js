import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoins,
  faDownload,
  faMoneyBillTrendUp,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
export const menuItems = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <FontAwesomeIcon icon={faDownload} />,
    link: 'overview',
  },
  {
    id: 2,
    title: 'Epxenses',
    icon: <FontAwesomeIcon icon={faCoins} />,
    link: 'expenses',
  },
  {
    id: 3,
    title: 'Incomes',
    icon: <FontAwesomeIcon icon={faMoneyBillTrendUp} />,
    link: 'incomes',
  },
  {
    id: 4,
    title: 'account',
    icon: <FontAwesomeIcon icon={faUser} />,
    link: 'account',
  },
];
