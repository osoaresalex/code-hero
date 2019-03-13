import React from 'react';
import {PropTypes} from 'prop-types';

function Title({text}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h1 className="color-red roboto-black title">{text.toUpperCase()}</h1>
      <div className="title__bar background-red" />
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
