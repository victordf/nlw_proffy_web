import React, { SelectHTMLAttributes } from 'react';

import './styles.css'

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  className?: string;
  label: string;
  options: Array<{
    value: string;
    label: string
  }>;
}

const Select: React.FC<IProps> = ({ label, name, className, options, ...rest}) => {
  return (
    <div className={`select-wrapper ${className}`}>
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>
        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  );
}

export default Select;