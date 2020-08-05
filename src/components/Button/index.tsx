import React from 'react';

import './styles.css'
import { Link } from 'react-router-dom';

interface IProps {
  type: 'button' | 'link';
  to?: string | '';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<IProps> = (props) => {
  const to = props.to ? props.to : '';
  const className = `main-button ${props.className}`;
  return (
    <>
      {props.type === 'button' || !props.type ?
      <button onClick={props.onClick} className={className}>{props.children}</button> :
      <Link to={to} className={className}>{props.children}</Link>}
    </>
  );
}

export default Button;