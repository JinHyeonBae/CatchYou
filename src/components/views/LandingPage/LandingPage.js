import React from "react";
import { withRouter } from "react-router-dom";
import TopicListContainer from "../_partials/TopicListContainer/TopicListContainer";
import ChatBoard from '../_partials/Chatting/ChatBoard'


function LandingPage() {
  return (
    <div className="mainScreen">
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
              <TopicListContainer/>
              <ChatBoard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LandingPage);
