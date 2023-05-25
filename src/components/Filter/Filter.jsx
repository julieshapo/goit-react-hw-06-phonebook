import { FilterField, Input } from './Filter.styled';
import { findContact, getFilter } from '../../redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const name = e => {
    dispatch(findContact(e.currentTarget.value.toLowerCase()));
  };

  return (
    <FilterField>
      <label>
        Find contact by name
        <Input type="text" name="filter" value={filter} onChange={name} />
      </label>
    </FilterField>
  );
};
