import React, { TextareaHTMLAttributes } from 'react';

import './styles.css'

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  className?: string;
  label: string;
  value?: string;
}

const Textarea: React.FC<IProps> = ({ label, name, className, ...rest}) => {
  return (
    <div className={`textarea-wrapper ${className}`}>
      <label htmlFor={name}>{label}</label>
      <textarea {...rest}/>
    </div>
  );
}

export default Textarea;