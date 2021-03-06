import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TopTopics from "../components/TopTopics";

import * as actions from "../actions/topics";

const mapStateToProps = state => ({
  topics: state.topics.topTopics.map(topicId => state.topics.topics[topicId])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TopTopics);
