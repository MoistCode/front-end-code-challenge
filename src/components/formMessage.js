import React from "react";
import PropTypes from "prop-types";

const FormMessage = props => {
  const { isValid, message } = props;

  const validityClassName = `profile-form__message${isValid ? "" : " profile-form__message--invalid"}`

  const message = isValid
    ? "Form submitted!"
    : ""

  return (
    <div className="profile-form__row">
      <span className={validityClassName}>{message}</span>
    </div>
  );
};

addInvalidClassesAndValidationMessage(emptyFields) {
  const emptyFieldNames = emptyFields.map(element => element.name);

  this.formMessageRef.current.classList.add("profile-form__message--invalid");
  this.formMessageRef.current.innerHTML = capitalizeFirstLetter(
    `${emptyFieldNames.join(", ")} can not be blank`
  );
}


FormMessage.defaultProps = {
  isValid: false,
  message: ""
};

FormMessage.propTypes = {
  isValid: PropTypes.bool,
  message: PropTypes.string
};

export default FormMessage;
