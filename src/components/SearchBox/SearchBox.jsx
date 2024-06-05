import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    // actions.resetForm();
    dispatch(changeFilter(value)); //відправляємо в стор наш екшн з отриманими з інпутів полів
  };

  return (
    <div>
      <p>Find contact by name</p>
      <input
        className={css.field}
        type="text"
        // value={value}
        onChange={handleChange}
      />
    </div>
  );
}
