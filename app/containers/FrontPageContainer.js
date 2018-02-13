import { connect } from "react-redux";

import FrontPage from "../components/FrontPage";

const mapStateToProps = state => {
  return {
    topics: state.topics
  };
};

export default connect(mapStateToProps)(FrontPage);
