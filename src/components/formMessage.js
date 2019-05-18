/**
 * This component renders the successful or unsuccessful message
 */

import React from "react";
import PropTypes from "prop-types";

const FormMessage = props => {
  const { isValid, emptyFields } = props;

  // Prevents unsuccessful message if there is no emptyFields
  if (emptyFields.length === 0 && !isValid) {
    console.log("FormMessage cannot be invalid and have no invalid fields.");
    return null;
  }

  // Handles adding/removing it's own classname(s)
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

// Appends all the invalid fields together for the unsuccessful message
function generateInvalidMessage(emptyFields) {
  return capitalizeFirstLetter(`${emptyFields.join(", ")} can not be blank`);
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
