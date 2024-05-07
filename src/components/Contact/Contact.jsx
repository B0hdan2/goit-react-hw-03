import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";

function Contact({ contacts, onDelet }) {
  {
    return contacts.map((contact) => {
      return (
        <li className={s.item} key={contact.id}>
          <div>
            <h2 className={s.title}>
              {" "}
              <FaUserTie /> {contact.name}
            </h2>
            <p className={s.number}>
              <FaPhone /> {contact.number}
            </p>
          </div>
          <button
            className={s.button}
            onClick={() => onDelet(contact.id)}
            type='button'
          >
            Delete
          </button>
        </li>
      );
    });
  }
}

export default Contact;
