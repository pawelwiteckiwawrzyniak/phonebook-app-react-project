import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <MenuItem
      onClick={() => {
        dispatch(logOut());
      }}
    >
      <Typography textAlign="center" sx={{ my: 0.5, color: 'text.secondary' }}>
        Log Out
      </Typography>
    </MenuItem>
  );
};
