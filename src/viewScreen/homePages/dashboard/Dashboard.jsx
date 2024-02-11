import NavbarApp from '../../../components/navbar/NavbarApp';
import { Toaster } from 'react-hot-toast';

export default function Dashboard() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            marginTop: '5rem',
            border: '1px solid #713200',
            padding: '13px',
            color: '#713200',
          },
        }}
      />
      <NavbarApp />
    </>
  );
}
