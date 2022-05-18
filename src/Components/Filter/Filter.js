import propTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, handleSearch }) {
  return (
    <form>
      <label>
        Find contacts by name
        <input
          className={s.Filter_input}
          type="text"
          value={value}
          onChange={handleSearch}
          placeholder="Enter something to start searching"
        />
      </label>
    </form>
  );
}

Filter.propTypes = {
  value: propTypes.string.isRequired,
  handleSearch: propTypes.func.isRequired,
};

export default Filter;
