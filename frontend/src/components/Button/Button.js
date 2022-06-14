import React from "react";

// Style and Assets
import "./style.css";

const Button = (props) => {
  const { type, onClick, label } = props;
  return (
    <button type={type} onClick={onClick} className="primary__button">
      {label}
    </button>
  );
};

export default Button;
