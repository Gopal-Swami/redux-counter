import React from 'react';

const Buttons = ({ icon, action }) => {
  return (
    <button className="action-btn" onClick={(e) => action()}>
      {icon}
    </button>
  );
};

export default Buttons;
