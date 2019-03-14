import React, {useState, useEffect} from 'react';
import {PropTypes} from 'prop-types';
import "./search-input.css";
import {pixelToRem, fonts, fontsMobile, colors} from "../../../template/template-params";

function SearchInput({label, id, searchHandler, isMobile}) {
  const styles = {
    container: {
      marginLeft: isMobile ? pixelToRem(30) : undefined,
      marginRight: isMobile ? pixelToRem(30) : undefined,
      marginBottom: isMobile ? pixelToRem(12) : pixelToRem(34),
    },
    label: {
      ...fonts.label,
    },
    input: {
      ...fonts.label,
      color: colors.text,
      border: `1px solid ${colors.inputBorder}`,
      width: isMobile ? '100%' : pixelToRem(384),
      paddingLeft: pixelToRem(14),
      height: pixelToRem(29),
      backgroundColor: colors.white,
    },
  };

  const [value, setValue] = useState('');

  function onChangeHandler(event) {
    setValue(event.target.value);
  }

  return (
    <div style={styles.container}>
      <label style={styles.label} htmlFor={id}>{label}</label>
      <input autoFocus
             style={styles.input}
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
