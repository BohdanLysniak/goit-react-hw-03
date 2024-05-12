import clsx from "clsx";
import css from "./Contact.module.css";

export default function Contact({ userData: { name, number } }) {
  return (
    <div className={clsx(css.itemWrapper)}>
      <ul className={clsx(css.contactWrapper)}>
        <li className={clsx(css.nameContact)}>
          <p>{name}</p>
        </li>
        <li className={clsx(css.numberContact)}>
          <p>{number}</p>
        </li>
      </ul>
      <button className={clsx(css.button)} type="button">
        Delete
      </button>
    </div>
  );
}
