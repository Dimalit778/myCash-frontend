import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import NavbarApp from '../../components/navbar/NavbarApp';
import { Toaster } from 'react-hot-toast';

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? 'dark' : 'light',
        },
      }),
    [dark]
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <Toaster position="botton-right" toastOptions={{ duration: 3000 }} />
      <NavbarApp />
    </ThemeProvider>
  );
}
