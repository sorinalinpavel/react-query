import { Box, Card, Typography } from '@mui/material';

import Skeleton from '@mui/material/Skeleton';
import { useGetAppointmentsList } from '../../api/appointments';

const UsersSummary = () => {
  const { data: list, isLoading } = useGetAppointmentsList();

  if (!isLoading && !list) {
    return null;
  }

  return (
    <Box mb={2}>
      <Card>
        <Box p={2}>
          <Typography>
            Total appointments:{' '}
            {isLoading ? (
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={15}
                width="60%"
              />
            ) : (
              list!.pages[0].count
            )}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default UsersSummary;
