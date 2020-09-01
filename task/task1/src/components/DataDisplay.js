import React from "react";
import { getUsers } from "../actions";
import { connect } from "react-redux";
import "./DataDisplay.css";

class DataDisplay extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  // renderData = this.props.users[0].map((user) => {
  //   return (
  //     <tr key={user._id}>
  //       <td>{user.fullname}</td>
  //       <td>{user.email}</td>
  //       <td>{user.password}</td>
  //     </tr>
  //   );
  // });

  render() {
    console.log(this.props.users);
    return this.props.users.length > 0 ? (
      <div id="data-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          {this.props.users[0].map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            );
          })}
        </table>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { getUsers })(DataDisplay);
