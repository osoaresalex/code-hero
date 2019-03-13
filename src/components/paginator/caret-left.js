import React from 'react';

function CaretLeft({isEnable, onClickHandler}) {
  const color = isEnable ? '#d20a0a' : '#efa9a9';
  const styles = {
    width: 0,
    height: 0,
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
    borderRight: `12px solid ${color}`,
    marginRight: '12px',
    cursor: isEnable? 'pointer': 'not-allowed',
  };
  return (
    <div style={styles} onClick={() => {
      if (isEnable)
        onClickHandler();
    }}/>
  );
}

CaretLeft.defaultProps = {
  isEnable: false,
};

export default CaretLeft;
