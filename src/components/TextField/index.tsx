import React from 'react';

import './styles.css'

interface IProps {
  id: string;
  className?: string;
  label: string;
  type?: string;
  rows?: number;
  cols?: number;
  value?: string;
}

const TextField: React.FC<IProps> = (props) => {
  return (
    <div className={`text-field-wrapper ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {props.type !== 'textarea' ?
      <input {...props}/> : <textarea {...props}></textarea>
      }
    </div>
  );
}

export default TextField;