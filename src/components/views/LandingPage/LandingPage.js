import React from "react";
import { withRouter } from "react-router-dom";
import TopicListContainer from "../_partials/TopicListContainer/TopicListContainer";

function LandingPage() {
  return (
    <div>
      <TopicListContainer />
    </div>
  );
}

export default withRouter(LandingPage);
