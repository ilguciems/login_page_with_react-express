import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div class="fixed-action-btn">
  <Link className="btn-floating btn-large red">
    <i class="large material-icons">mode_edit</i>
  </Link>
  <ul>
    <li><Link to="/" className= "btn-floating red"><i className="material-icons">insert_chart</i></Link></li>
    <li><Link to="/" className="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></Link></li>
    <li><Link to="/" className="btn-floating green"><i class="material-icons">publish</i></Link></li>
    <li><Link to="/" className="btn-floating blue"><i class="material-icons">attach_file</i></Link></li>
  </ul>
</div>
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]} {user.id}
              <p className="flow-text grey-text text-darken-1">
                You are logged 
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable red accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);



