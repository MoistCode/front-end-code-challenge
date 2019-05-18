import React from "react";
import PropTypes from "prop-types";
import noop from "../utils/noop";

const LabelInputItem = props => {
  const { labelText, inputValue, inputName, onChange, isValid } = props;

  const validityClassName = `profile-form__field${
    isValid ? "" : " profile-form__field--invalid"
  }`;

  return (
    <label className="profile-form__row">
      {labelText}
      <input
        defaultValue={inputValue}
        className={validityClassName}
        name={inputName}
        type="text"
        onChange={onChange}
      />
    </label>
  );
};

LabelInputItem.defaultProps = {
  labelText: "",
  inputValue: "",
  inputName: "",
  onChange: noop,
  isValid: false
};

LabelInputItem.propTypes = {
  labelText: PropTypes.string,
  inputValue: PropTypes.string,
  inputName: PropTypes.string,
  onChange: PropTypes.func,
  isValid: PropTypes.bool
};

export default LabelInputItem;
