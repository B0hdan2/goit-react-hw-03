import s from "./SearchBox.module.css";
import PropTypes from "prop-types";

function SearchBox({ value, onFilter }) {
  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type='text'
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default SearchBox;
