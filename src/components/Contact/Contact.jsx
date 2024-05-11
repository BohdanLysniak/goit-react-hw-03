import clsx from "clsx";
import css from "./Contact.module.css";

export default function Contact({ userData }) {
  return (
    <div className={clsx(css.itemWrapper)}>
      <ul className={clsx(css.contactWrapper)}>
        <li className={clsx(css.nameContact)}>
          <p>{userData.name}</p>
        </li>
        <li className={clsx(css.numberContact)}>
          <p>{userData.number}</p>
        </li>
      </ul>
      <button className={clsx(css.button)} type="button">
        Delete
      </button>
    </div>
  );
}
