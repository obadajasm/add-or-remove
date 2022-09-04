import React from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import PropTypes from "prop-types";
import { signOptions } from "../consts";

export const CustomRow = ({
  row,
  onDelete,
  onDisable,
  onDropdownValueChange,
  onInputChange,
}) => {
  return (
    <>
      <li
        style={{
          padding: "8px",
        }}
      >
        <Dropdown
          disabled={row.disabled}
          options={signOptions}
          value={row.sign}
          onDropdownValueChange={() => onDropdownValueChange(row)}
        />
        <input
          disabled={row.disabled}
          style={{ width: "200px" }}
          value={row.value}
          onChange={(e) => onInputChange(e, row)}
          type="number"
        />
        <Button
          disabled={row.disabled}
          title="Delete"
          onClick={() => onDelete(row)}
        />
        <Button
          title={row.disabled ? "Enable" : "Disable"}
          onClick={() => onDisable(row)}
        />
      </li>
    </>
  );
};

CustomRow.propTypes = {
  onDropdownValueChange: PropTypes.func,
  onDelete: PropTypes.func,
  onDisable: PropTypes.func,
  onInputChange: PropTypes.func,
  row: PropTypes.shape({
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    sign: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default CustomRow;
