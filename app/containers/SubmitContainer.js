import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Submit from "../components/Submit";

import * as actions from "../actions/topics";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(Submit);
