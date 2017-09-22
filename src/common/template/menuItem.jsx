import React from 'react'

export default props => (
  <li>
      <a href to={props.path}>
        <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
      </a>
  </li>
);
