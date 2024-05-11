import css from "./Contact.module.css";

import { ImUser } from "react-icons/im";
import { ImPhone } from "react-icons/im";

export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.userContainer}>
        <div className={css.userName}>
          <ImUser />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.userPhone}>
          <ImPhone />
          <p className={css.phone}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
