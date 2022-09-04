import React from "react";
import PropTypes from "prop-types";
export const Dropdown = ({
  value,
  options,
  onDropdownValueChange,
  disabled,
}) => {
  return (
    <select
      disabled={disabled}
      value={value}
      style={{ margin: "8px" }}
      onChange={onDropdownValueChange}
      name="drop-down"
      id="drop-down"
    >
      {options.map((e) => (
        <option key={e.value} value={e.value}>
          {" "}
          {e.label}{" "}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  value: PropTypes.string,
  onDropdownValueChange: PropTypes.func,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default Dropdown;
