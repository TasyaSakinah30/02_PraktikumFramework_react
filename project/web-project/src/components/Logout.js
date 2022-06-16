import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";

class Logout extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };

    render() {
        const { isLoggingOut, logoutError } = this.props; return (

            <li class="nav-item">
                <div class="d-grid gap-2 d-md-flex">
                    <button class="btn btn-warning me-md-2" onClick={this.handleLogout}>Logout</button>
                    {isLoggingOut && <p>Logging Out....</p>}
                    {logoutError && <p>Error logging out</p>}
                </div>
            </li>
        )
    };

}
function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError


    };
}
export default connect(mapStateToProps)(Logout);