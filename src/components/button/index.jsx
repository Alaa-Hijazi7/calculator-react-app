import React from "react";
import "./button.css";

const Button = ({content, type,onButtonClick}) => {
    return <div className={`button ${content === "0" ? "Zero" : ""}
    ${type || ""}`} onClick={onButtonClick(content)}> {content}</div >;
}
export default Button;