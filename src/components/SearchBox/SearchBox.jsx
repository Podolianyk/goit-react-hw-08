import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.container}>
      <p>Find contact by name</p>
      <input
        className={css.field}
        type="text"
        name="filter"
        onChange={handleChange}
      />
    </div>
  );
}
