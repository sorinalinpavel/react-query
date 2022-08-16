import './App.css';

import { AppBar, Box, Toolbar } from '@mui/material';
import { Route, Switch, useHistory } from 'react-router-dom';

import Appointment from './pages/Appointment';
import Appointments from './pages/Appointments';
import Auth from './pages/Auth';
import UserProfile from './components/UserProfile/UserProfile';
import { pageRoutes } from './routes';
import { useEffect } from 'react';
import { useGetProfile } from './api/auth';

function App() {
  const history = useHistory();
  const { error } = useGetProfile();

  useEffect(() => {
    if (error) {
      history.replace(pageRoutes.auth);
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
      <Switch>
        <Route path={pageRoutes.main} exact>
          <Appointments />
        </Route>
        <Route path={pageRoutes.auth} exact>
          <Auth />
        </Route>
        <Route path={pageRoutes.appointment} exact>
          <Appointment />
        </Route>
      </Switch>
    </>
  );
}

export default App;
