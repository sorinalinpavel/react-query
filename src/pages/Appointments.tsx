import { Box } from '@mui/material';
import UsersList from '../components/UsersList/UsersList';
import UsersSummary from '../components/UsersSummary/UsersSummary';

const Appointments = () => {
  return (
    <Box>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <UsersSummary />
      <UsersList />
    </Box>
  );
};

export default Appointments;
