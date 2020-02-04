import React from 'react';

const Button = props => {
  return (
    <div>
      <button type="button" className="btn btn btn-primary">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
