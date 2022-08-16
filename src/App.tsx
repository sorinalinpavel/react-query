import './App.css';

import { AppBar, Box, Toolbar } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Appointment from './pages/Appointment';
import Appointments from './pages/Appointments';
import Auth from './pages/Auth';
import UserProfile from './components/UserProfile/UserProfile';
import { pageRoutes } from './routes';
import { useEffect } from 'react';
import { useGetProfile } from './api/auth';

function App() {
  const navigate = useNavigate();
  const { error } = useGetProfile();

  useEffect(() => {
    if (error) {
      navigate(pageRoutes.auth);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box display="flex" justifyContent="flex-end" width="100%">
            <UserProfile />
          </Box>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path={pageRoutes.main} element={<Appointments />} />

        <Route path={pageRoutes.auth} element={<Auth />} />
        <Route path={pageRoutes.appointment} element={<Appointment />} />
      </Routes>
    </>
  );
}

export default App;
