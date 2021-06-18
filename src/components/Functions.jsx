import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import './Button/Button.css'

const Functions = ({ onContentClear, onDelete }) => (
  <section className="functions">
    <Button type="longTextButton" text="Cl" clickHandler={onContentClear} />
    <Button text="&larr;" clickHandler={onDelete} />
  </section>
);

Functions.propTypes = {
    onContentClear: PropTypes.func,
    onDelete: PropTypes.func
}

export default Functions;
