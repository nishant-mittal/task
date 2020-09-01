import React from "react";
import { connect } from "react-redux";
import "./Register.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>{`Hello ${this.props.signedInUser.fullname}`}</h1>
        <Link to={`/update/${this.props.signedInUser._id}`} id="update-button">
          Update
        </Link>
        <Link to="/data" id="register-button">
          Data
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    signedInUser: state.signedInUser,
  };
};

export default connect(mapStateToProps)(Home);
