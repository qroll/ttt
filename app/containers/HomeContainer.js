import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Home from "../components/Home";

import * as actions from "../actions/topics";

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
