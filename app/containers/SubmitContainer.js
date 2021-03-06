import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Submit from "../components/Submit";

import * as actions from "../actions/topics";

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
