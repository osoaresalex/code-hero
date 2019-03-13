import React, {useState, useEffect} from 'react';
import {PropTypes} from 'prop-types';
import "./search-input.css";

function SearchInput({label, id, searchHandler}) {
  const [value, setValue] = useState('');

  function onChangeHandler(event) {
    setValue(event.target.value);
  }

  return (
    <div className="search">
      <label className="search__label color-red roboto-regular" htmlFor={id}>{label}</label>
      <input autoFocus
             className="search__input"
             id={id} name={id}
             type="text" value={value}
             onChange={onChangeHandler}/>
    </div>
  );
}

SearchInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  searchHandler: PropTypes.func.isRequired,
};

export default SearchInput;
