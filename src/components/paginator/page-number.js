import React from 'react';
import {PropTypes} from 'prop-types';

function PageNumber({isActive, onClickHandler, number}) {
  const bgcolor = isActive ? '#d42026' : '#FFF';
  const color = isActive ? '#fff' : '#d42026';
  const styles = {
    backgroundColor: bgcolor,
    color: color,
  };
  return (
    <div className="page-number" style={styles} onClick={() => {
      onClickHandler();
    }}>
      {number}
    </div>
  );
}

PageNumber.defaultProps = {
  isActive: false,
};

PageNumber.propTypes = {
  isActive: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
};

export default PageNumber;
