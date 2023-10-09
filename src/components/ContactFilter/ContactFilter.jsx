import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const handleFilter = filter => dispatch(setFilter(filter));

  return (
    <div style={{ marginLeft: 20 }}>
      <Typography component="h1" variant="h5">
        Find your contacts
      </Typography>
      <TextField
        margin="normal"
        label="Filter"
        name="filter"
        type="text"
        autoFocus
        onChange={event => {
          handleFilter(event.target.value.toLowerCase());
        }}
      />
    </div>
  );
};
