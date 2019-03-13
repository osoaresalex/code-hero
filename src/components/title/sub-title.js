import React from 'react';
import {PropTypes} from 'prop-types';

function SubTitle({text}) {
  return (
    <h1 className="color-red roboto-regular title">{text.toUpperCase()}</h1>
  );
}

SubTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubTitle;
