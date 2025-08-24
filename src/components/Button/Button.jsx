import React from 'react';
import { StyledWrapper } from './Button.styles';

const Button = ({ text, className, id }) => {
  return (
    <StyledWrapper>
      <div className="btn-container">
        <div style={{ '--a': 0 }} className="btn-sensor sensor-n" />
        <div style={{ '--a': 45 }} className="btn-sensor sensor-ne" />
        <div style={{ '--a': 90 }} className="btn-sensor sensor-e" />
        <div style={{ '--a': 135 }} className="btn-sensor sensor-se" />
        <div style={{ '--a': 180 }} className="btn-sensor sensor-s" />
        <div style={{ '--a': 225 }} className="btn-sensor sensor-sw" />
        <div style={{ '--a': 270 }} className="btn-sensor sensor-w" />
        <div style={{ '--a': 315 }} className="btn-sensor sensor-nw" />
        <button className={`btn-button ${className}`} id={id}>
          <div className="btn-lid" />
          <div className="btn-pupil" />
          {text && <span className="btn-text">{text}</span>}
        </button>
      </div>
    </StyledWrapper>
  );
}

export default Button;