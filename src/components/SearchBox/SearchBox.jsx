import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filterSlice";
import css from "./SearchBox.module.css"

export default function SearchBox({ value, onFilter }) {
  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilter);

  const input = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        value={value}
        onChange={input}
      />
    </div>
  );
}