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

class Profile extends Component {
  state = {
    name: this.props.profile.name,
    phone: this.props.profile.phone,
    email: this.props.profile.email,
    gender: this.props.profile.gender,
    nameIsValid: null,
    phoneIsValid: null,
    emailIsValid: null,
    genderIsValid: "unspecified",
    formIsValid: null,
    emptyFields: []
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { name, phone, email, gender } = this.state;
    const nameIsValid = !!name;
    const phoneIsValid = !!phone;
    const emailIsValid = !!email;
    const genderIsValid = !!gender;

    const formIsValid = (nameIsValid && phoneIsValid && emailIsValid && genderIsValid);

    this.setState({
      nameIsValid,
      phoneIsValid,
      emailIsValid,
      genderIsValid,
      formIsValid
    });
  }

  handleChange = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;

    this.setState({
      [targetName]: targetValue,
      [`${targetName}IsValid`]: !!targetValue
    });
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

          {this.state.formIsValid !== null && (
            <FormMessage 
              isValid={this.state.formIsValid} 
              emptyFields={}/>
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
