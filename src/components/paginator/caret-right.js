import React from 'react';

function CaretRight({isEnable, onClickHandler}) {
  const color = isEnable ? '#d20a0a' : '#efa9a9';
  const styles = {
    width: 0,
    height: 0,
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
    borderLeft: `12px solid ${color}`,
    marginLeft: '12px',
    cursor: isEnable? 'pointer': 'not-allowed',
  };
  return (
    <div style={styles} onClick={() => {
      if (isEnable)
        onClickHandler();
    }}/>
  );
}

CaretRight.defaultProps = {
  isEnable: false,
};

export default CaretRight;
