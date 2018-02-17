import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions/user";
import User from "../components/User";

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
