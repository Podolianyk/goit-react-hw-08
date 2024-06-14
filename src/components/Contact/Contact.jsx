import { ImUser } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { BiSolidSave } from "react-icons/bi";
import css from "./Contact.module.css";
import {
  deleteContact,
  updateContact,
} from "../../redux/contacts/operations.js";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Contact({ name, number, id }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleCorrection = () => {
    dispatch(updateContact({ id, name: newName, number: newNumber }))
      .unwrap()
      .then(() => toast.success(`Contact updated successfully!`))
      .catch(() =>
        toast.error(`Oops, something went wrong. 
        Try again later!`)
      );
  };

  return (
    <div className={css.container}>
      <div className={css.userContainer}>
        <div className={css.userName}>
          <ImUser />
          {isUpdating ? (
            <input
              className={css.input}
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          ) : (
            <p className={css.name}>{name}</p>
          )}
        </div>
        <div className={css.userPhone}>
          <ImPhone />
          {isUpdating ? (
            <input
              className={css.input}
              type="text"
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          ) : (
            <p className={css.phone}>{number}</p>
          )}
        </div>
      </div>
      <div className={css.iconContainer}>
        <button className={css.btn} onClick={handleDelete}>
          <FaTrashAlt className={css.icon} />
        </button>
        <button className={css.btn} onClick={() => setIsUpdating(!isUpdating)}>
          <FaPen className={css.icon} />
        </button>
        {isUpdating && (
          <button className={css.btn} onClick={handleCorrection}>
            <BiSolidSave className={css.icon} />
          </button>
        )}
      </div>
    </div>
  );
}
