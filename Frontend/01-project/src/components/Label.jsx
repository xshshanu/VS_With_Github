import React from 'react';
import './Label.css'

const Label = ({titleW, titleH, spanW, spanH}) => {
  return (
    <div className='label'>
        <div>{titleW}{" "}<span className='span'>{spanW}</span></div>
        <div>{titleH}{" "}<span className='span'>{spanH}</span></div>
    </div>
  )
}

export default Label