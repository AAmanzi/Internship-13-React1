import React from 'react';

export default (props) => {
  if(props.isActive)
    return <h2 style={{color: props.color}}>{props.label}</h2>

  return <h2>{props.label}</h2>
};