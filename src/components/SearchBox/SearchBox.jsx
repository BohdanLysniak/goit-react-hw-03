import clsx from "clsx";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <>
      <p className={clsx(css.searchText)}> Search contacts by name</p>
      <input
        className={clsx(css.inputText)}
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </>
  );
}
