import React from "react";
import { withRouter } from "react-router-dom";
import "./topicListContainer.scss";
import TopicListWidget from "./TopicListWidget";

function TopicListContainer(props) {
    return (
        <div className="sidebar-side left-sidebar col-lg-3 col-md-12 col-sm-12" >
            {/* Sidebar Side */}
            <aside className="sidebar sticky-top">
                <TopicListWidget title="Topic List" />
                <div className="vertical-bar"><i></i></div>
                <TopicListWidget title="Chat List" />
            </aside>
        </div>

    );
}
export default withRouter(TopicListContainer);
