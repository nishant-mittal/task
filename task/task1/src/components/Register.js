import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { addUser } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import image from "./register.svg";
import "./Register.css";

export class Register extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <p style={{ color: "red", margin: "0 0 0 1.1em" }}>{error}</p>;
    }
  }

  renderInput = (formValues) => {
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
    const model = {
      fullname: null,
      email: null,
      password: null,
    };

    const values = _.pick(formValues, _.keys(model));
    this.props.addUser(values);
  };

  render() {
    return (
      <div id="main">
        <div id="register">
          <h1>Register</h1>
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
            <Field
              name="repassword"
              component={this.renderInput}
              hint="Re-enter password"
              type="password"
            />
            <button id="register-button">
              Register<i className="fas fa-arrow-right"></i>
            </button>

            {/* <Link
              to="/data"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              Data
            </Link> */}
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

  if (formValues.password !== formValues.repassword) {
    error.repassword = "Passwords don't match!";
  }

  return error;
};

const formExport = reduxForm({ form: "registerForm", validate })(Register);
export default connect(null, { addUser })(formExport);
