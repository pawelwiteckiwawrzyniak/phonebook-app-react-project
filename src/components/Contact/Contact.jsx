import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button } from '@mui/material';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <Fragment>
      <p>
        {contact.name}: {contact.number}
      </p>
      <Button
        type="button"
        variant="contained"
        onClick={handleDelete}
        sx={{ marginLeft: 2, height: 25 }}
      >
        Delete
      </Button>
    </Fragment>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
};
