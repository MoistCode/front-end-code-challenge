import React, { Component } from "react";
import PropTypes from "prop-types";
import "./profile.css";

// Components
import LabelInputItem from "./labelInputItem";
import LabelOptionItem from "./labelOptionItem";
import FormMessage from "./formMessage";

const options = [
  {
    value: "unspecified",
    text: "Unspecified"
  },
  {
    value: "male",
    text: "Male"
  },
  {
    value: "female",
    text: "Female"
  }
];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Profile extends Component {
  constructor() {
    super();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.formMessageRef = React.createRef();
  }

  removeInvalidClasses(requiredFields) {
    requiredFields.forEach(element => {
      element.classList.remove("profile-form__field--invalid");
    });

    this.formMessageRef.current.innerHTML = "";
    this.formMessageRef.current.classList.remove(
      "profile-form__message--invalid"
    );
  }

  addInvalidClassesAndValidationMessage(emptyFields) {
    const emptyFieldNames = emptyFields.map(element => element.name);

    this.formMessageRef.current.classList.add("profile-form__message--invalid");
    this.formMessageRef.current.innerHTML = capitalizeFirstLetter(
      `${emptyFieldNames.join(", ")} can not be blank`
    );
  }

  showFormSuccess() {
    this.formMessageRef.current.innerHTML = "Form submitted!";
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const requiredFields = [
      event.target.name,
      event.target.gender,
      event.target.email,
      event.target.phone
    ];

    const emptyFields = requiredFields.filter(
      element => !Boolean(element.value)
    );

    this.removeInvalidClasses(requiredFields);

    if (emptyFields.length) {
      this.addInvalidClassesAndValidationMessage(emptyFields);

      emptyFields.forEach(element => {
        element.classList.add("profile-form__field--invalid");
      });
    } else {
      this.showFormSuccess();

      console.log({
        name: event.target.name.value,
        gender: event.target.gender.value,
        email: event.target.email.value,
        phone: event.target.phone.value
      });
    }
  }

  render() {
    return (
      <div className="app">
        <h1>{this.props.name}</h1>
        <form onSubmit={this.handleFormSubmit}>
          <LabelInputItem
            labelText="Name:"
            inputValue={this.props.profile.name}
            inputName="name"
            onChange={() => {}}
          />

          <LabelOptionItem
            labelText="Gender:"
            selectName="gender"
            selectValue={this.props.profile.gender}
            options={options}
            onChange={() => {}}
          />

          <LabelInputItem
            labelText="Email:"
            inputValue={this.props.profile.email}
            inputName="email"
            onChange={() => {}}
          />

          <LabelInputItem
            labelText="Phone:"
            inputValue={this.props.profile.phone}
            inputName="phone"
            onChange={() => {}}
          />

          <div className="profile-form__row">
            <input type="submit" value="Save" />
          </div>

          <div className="profile-form__row">
            <span ref={this.formMessageRef} className="profile-form__message" />
          </div>
        </form>
      </div>
    );
  }
}

Profile.defaultProps = {
  profile: {
    name: "",
    gender: "",
    email: "",
    phone: ""
  }
};

Profile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }),
  name: PropTypes.string.isRequired
};

export default Profile;
