import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './ContactFilter.module.css';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const handleFilter = filter => dispatch(setFilter(filter));

  return (
    <div className={css.filter}>
      <span className={css.filter__title}>Find contacts by name</span>
      <input
        className={css.filter__inputBox}
        type="text"
        name="filter"
        onChange={event => {
          handleFilter(event.target.value.toLowerCase());
        }}
      />
    </div>
  );
};
