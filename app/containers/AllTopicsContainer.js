import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AllTopics from "../components/AllTopics";

import * as actions from "../actions/topics";

const mapStateToProps = state => ({
  topics: state.topics.allTopics.map(topicId => state.topics.topics[topicId])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AllTopics);
