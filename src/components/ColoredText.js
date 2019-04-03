import React from 'react';

export default (props) => {
  const style = {
    color: props.color
  }

  if(props.isActive)
    return <h2 style={style}>{props.label}</h2>

  return <h2>{props.label}</h2>
};