import clsx from "clsx";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ usersData }) {
  return (
    <ul className={clsx(css.userList)}>
      {usersData.map(userData => (
        <li className={clsx(css.item)} key={userData.id}>
          <Contact userData={userData} />
        </li>
      ))}
    </ul>
  );
}
