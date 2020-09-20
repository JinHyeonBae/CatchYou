import React from "react";
import { withRouter } from "react-router-dom";
import "./topicListContainer.scss";
import TopicListWidget from "./TopicListWidget";

function TopicListContainer(props) {
  return (
    <div className="sidebar-page-container">
        <div className="auto-container">
            <div className="row clearfix">

                {/* Sidebar Side */}
                <div className="sidebar-side left-sidebar col-lg-3 col-md-12 col-sm-12">
                    <aside className="sidebar sticky-top">
                        <TopicListWidget title="Topic List"/>
                        <div className="vertical-bar"><i></i></div>
                        <TopicListWidget title="Chat List"/>
                    </aside>
                </div>

                {/* Content Side */}
            </div>
        </div>
    </div>
    );
}
export default withRouter(TopicListContainer);
