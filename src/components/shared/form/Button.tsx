import React from 'react';
import './button.scss';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ children, ...restProps }: ButtonProps) => {
  return (
    <button className="custom-btn" {...restProps}>
      {children}
    </button>
  );
};

export default Button;
