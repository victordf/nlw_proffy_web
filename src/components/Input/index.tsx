import React, { InputHTMLAttributes } from 'react';

import './styles.css'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
  label: string;
  type?: string;
  value?: string;
}

const Input: React.FC<IProps> = ({ label, name, className, type, ...rest}) => {
  const classNameField = className ? className : '';
  return (
    <div className={`text-field-wrapper ${classNameField}`}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} {...rest}/>
    </div>
  );
}

export default Input;