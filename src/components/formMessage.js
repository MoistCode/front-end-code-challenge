import React from "react";
import PropTypes from "prop-types";

const FormMessage = props => {
  const { isValid, emptyFields } = props;

  if (emptyFields.length === 0 && !isValid) {
    console.log("FormMessage cannot be invalid and have no invalid fields.");
    return null;
  }

  const validityClassName = `profile-form__message${
    isValid ? "" : " profile-form__message--invalid"
  }`;

  const message = isValid
    ? "Form submitted!"
    : generateInvalidMessage(emptyFields);

  return (
    <div className="profile-form__row">
      <span className={validityClassName}>{message}</span>
    </div>
  );
};

function generateInvalidMessage(emptyFields) {
  const emptyFieldNames = emptyFields.map(element => element.name);

  return capitalizeFirstLetter(
    `${emptyFieldNames.join(", ")} can not be blank`
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

FormMessage.defaultProps = {
  isValid: true,
  emptyFields: []
};

FormMessage.propTypes = {
  isValid: PropTypes.bool,
  emptyFields: PropTypes.array
};

export default FormMessage;
