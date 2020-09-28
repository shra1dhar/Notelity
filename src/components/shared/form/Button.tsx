import React from 'react';
import './button.scss';

const Button: React.FC = ({ children, ...restProps }) => {
  return (
    <button className="custom-btn" {...restProps}>
      {children}
    </button>
  );
};

export default Button;
