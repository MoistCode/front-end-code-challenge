import React, { Component } from "react";
import PropTypes from "prop-types";
import "./profile.css";

// Components
import LabelInputItem from "./labelInputItem";
import LabelOptionItem from "./labelOptionItem";
import FormMessage from "./formMessage";

// These options are out here to prevent recreating the array.
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

class Profile extends Component {
  /**
   * Validity of each input starts off as true to prevent initial error
   */
  state = {
    name: this.props.profile.name,
    phone: this.props.profile.phone,
    email: this.props.profile.email,
    gender: this.props.profile.gender || "unspecified",
    nameIsValid: true,
    phoneIsValid: true,
    emailIsValid: true,
    genderIsValid: true,
    formIsValid: null,
    emptyFields: []
  };

  /**
   * This function runs when the submit button is clicked.
   * It checks the state to ensure that none of the inputs are empty strings.
   * If none are empty strings then form is valid
   *  else, form is invalid
   */
  handleFormSubmit = event => {
    event.preventDefault();

    const { name, phone, email, gender } = this.state;
    const nameIsValid = !!name;
    const phoneIsValid = !!phone;
    const emailIsValid = !!email;
    const genderIsValid = !!gender;

    const formIsValid =
      nameIsValid && phoneIsValid && emailIsValid && genderIsValid;

    const emptyFields = [];

    if (!formIsValid) {
      !nameIsValid && emptyFields.push("name");
      !phoneIsValid && emptyFields.push("phone");
      !emailIsValid && emptyFields.push("email");
      !genderIsValid && emptyFields.push("gender");
    }

    this.setState({
      nameIsValid,
      phoneIsValid,
      emailIsValid,
      genderIsValid,
      formIsValid,
      emptyFields
    });
  };

  /**
   * General handler for all inputs
   * This relies on each components name being the same as the state property
   */
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="app">
        <h1>{this.props.name}</h1>

        <form onSubmit={this.handleFormSubmit}>
          <LabelInputItem
            labelText="Name:"
            inputValue={this.props.profile.name}
            inputName="name"
            isValid={this.state.nameIsValid}
            onChange={this.handleChange}
          />

          <LabelOptionItem
            labelText="Gender:"
            selectName="gender"
            selectValue={this.props.profile.gender}
            options={options}
            isValid={this.state.genderIsValid}
            onChange={this.handleChange}
          />

          <LabelInputItem
            labelText="Email:"
            inputValue={this.props.profile.email}
            inputName="email"
            isValid={this.state.emailIsValid}
            onChange={this.handleChange}
          />

          <LabelInputItem
            labelText="Phone:"
            inputValue={this.props.profile.phone}
            inputName="phone"
            isValid={this.state.phoneIsValid}
            onChange={this.handleChange}
          />

          <div className="profile-form__row">
            <input type="submit" value="Save" />
          </div>

          {/* 
            Form validity starts off as null so neither success 
            nor unsuccessful message shows up
          */}
          {this.state.formIsValid !== null && (
            <FormMessage
              isValid={this.state.formIsValid}
              emptyFields={this.state.emptyFields}
            />
          )}
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
