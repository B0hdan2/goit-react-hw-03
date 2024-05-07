import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import PropTypes from "prop-types";

function Contact({ onDelete, id, name, number }) {
  return (
    <li className={s.item} key={id}>
      <div>
        <h2 className={s.title}>
          <FaUserTie /> {name}
        </h2>
        <p className={s.number}>
          <FaPhone /> {number}
        </p>
      </div>
      <button className={s.button} onClick={() => onDelete(id)} type='button'>
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
