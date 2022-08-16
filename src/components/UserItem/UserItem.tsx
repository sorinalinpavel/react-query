import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';

import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { pageRoutes } from '../../routes';
import { pathToUrl } from '../../utils/router';
import upperFirst from 'lodash/upperFirst';

type Props = {
  id: number;
  name: string;
  date: string;
};

const UserItem = ({ name, date, id }: Props) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText
        primary={upperFirst(name)}
        secondary={format(new Date(date), 'd MMM yyyy')}
      />
      <ListItemSecondaryAction>
        <Link
          to={pathToUrl(pageRoutes.appointment, { id })}
          style={{ color: 'inherit' }}
        >
          <IconButton edge="end">
            <InsertInvitationIcon />
          </IconButton>
        </Link>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default UserItem;
