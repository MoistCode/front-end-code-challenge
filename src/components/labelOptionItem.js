import React from "react";
import PropTypes from "prop-types";
import noop from "../utils/noop";

const LabelOptionItem = props => {
  const {
    labelText,
    selectValue,
    selectName,
    options,
    onChange,
    isValid
  } = props;

  const validityClassName = `profile-form__field profile-form__select${
    isValid ? "" : " profile-form__field--invalid"
  }`;

  return (
    <label className="profile-form__row">
      {labelText}
      <select
        defaultValue={selectValue}
        className={validityClassName}
        name={selectName}
        onChange={onChange}
      >
        {generateOptions(options)}
      </select>
    </label>
  );
};

function generateOptions(options) {
  return options.map(option => (
    <option value={option.value}>{option.text}</option>
  ));
}

LabelOptionItem.defaultProps = {
  labelText: "",
  selectValue: "",
  selectName: "",
  options: [],
  onChange: noop,
  isValid: true
};

LabelOptionItem.propTypes = {
  labelText: PropTypes.string,
  selectValue: PropTypes.string,
  selectName: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string
    })
  ),
  onChange: PropTypes.func,
  isValid: PropTypes.bool
};

export default LabelOptionItem;
