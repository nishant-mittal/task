import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { updateUser } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../history";
import image from "./register.svg";
import "./Register.css";

export class Update extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <p style={{ color: "red", margin: "0 0 0 1.1em" }}>{error}</p>;
    }
  }

  renderInput = (formValues) => {
    console.log(this.props.match.params.id);
    return (
      <div>
        <label>
          <input
            {...formValues.input}
            placeholder={formValues.hint}
            className="register-input"
            type={formValues.type}
          />
        </label>
        {this.renderError(formValues.meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    //console.log(formValues);
    this.props.updateUser(this.props.match.params.id, formValues);
    history.push("/home");
  };

  render() {
    return (
      <div id="main">
        <div id="register">
          <h1>Update</h1>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name="fullname"
              component={this.renderInput}
              hint="Enter full name"
              type="text"
            />
            <Field
              name="email"
              component={this.renderInput}
              hint="Enter email"
              type="text"
            />
            <Field
              name="password"
              component={this.renderInput}
              hint="Enter password"
              type="password"
            />
            <button id="register-button">
              Submit<i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
        <div id="img-div">
          <img src={image} alt="register" />
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const error = {};

  if (!formValues.fullname) {
    error.fullname = "Enter full name!";
  }

  if (!formValues.email) {
    error.email = "Enter email!";
  }

  if (!formValues.password) {
    error.password = "Enter password!";
  }
  return error;
};

const formExport = reduxForm({ form: "registerForm", validate })(Update);
export default connect(null, { updateUser })(formExport);
