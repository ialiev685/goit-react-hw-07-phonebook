import "./Filter.scss";

import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/phonebook/contacts-selector";
import * as actions from "../../redux/phonebook/contacts-action";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = (e) => dispatch(actions.getFilterItems(e.target.value));

  return (
    <label className="filter-input">
      Поиск:
      <input
        className="filter-input__text"
        type="text"
        value={filter}
        name="filter"
        onChange={changeFilter}
      />
    </label>
  );
};

export default Filter;
