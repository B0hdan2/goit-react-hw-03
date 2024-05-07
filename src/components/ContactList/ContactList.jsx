import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css";
function ContactList({ contacts, onDelet }) {
  return (
    <ul className={s.list}>
      <Contact contacts={contacts} onDelet={onDelet} />
    </ul>
  );
}

export default ContactList;
