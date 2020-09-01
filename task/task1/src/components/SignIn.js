import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
// import { addUser } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../history";
import { getUsers, signedInUser } from "../actions";
import _ from "lodash";
import image from "./register.svg";
import "./Register.css";

export class SignIn extends Component {
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
    const model = {
      email: null,
      password: null,
    };

    if (this.props.users) {
      const isUser = this.props.users[0].find((user) => {
        const value = _.pick(user, _.keys(model));
        return _.isEqual(value, formValues);
      });

      if (isUser) {
        console.log(isUser);
        this.props.signedInUser(isUser);
        history.push("/home");
      } else {
        alert("User does not exist!");
      }

      // if (signIn) {
      //   console.log(signIn);
      //   console.log("Yes this is you");
      // }
    }

    //history.push("/home");
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div id="main">
        <div id="register">
          <h1>Sign in</h1>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            {/* <Field
              name="fullname"
              component={this.renderInput}
              hint="Enter full name"
              type="text"
            /> */}
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
            <button id="register-button" style={{ marginLeft: "1.5em" }}>
              Sign in<i className="fas fa-arrow-right"></i>
            </button>
            <Link to="/register">
              <button id="update-button">
                Sign up<i className="fas fa-arrow-right"></i>
              </button>
            </Link>
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

  // if (!formValues.fullname) {
  //   error.fullname = "Enter full name!";
  // }

  if (!formValues.email) {
    error.email = "Enter email!";
  }

  if (!formValues.password) {
    error.password = "Enter password!";
  }

  return error;
};

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    users: state.users,
  };
};

const formExport = reduxForm({ form: "signInForm", validate })(SignIn);
export default connect(mapStateToProps, { getUsers, signedInUser })(formExport);
