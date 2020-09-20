import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ModalPortal from '../../../utils/ModalPortal';
import CreateTopicModal from "./CreatingTopicModal";
import { getTopicList } from "../../../../_actions/topicAction";

function TopicListWidget(props) {
    const title = props.title;
    const [lists, setLists] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopicList())
            .then((response) => {
            setLists(response.payload.topics);
            if (!response.payload.success){
              alert("Failed to make a new topic.");
            }
          })
          .catch((req)=>{
            console.log("catched : ", req);
          })
    }, []);

    const handleOpenModal = () => {
      setModalVisible(true);
    }
    const handleCloseModal = () => {
      setModalVisible(false);
    }

    const mapList = lists.map(list => 
    <li key={list._id}><a href={`${list.topicName}.html`}><span className="icon flaticon-web-programming"></span>{list.topicName}</a></li>
    )

    return (
        <div className="sidebar-widget categories-widget">
            <div className="widget-content">
                <div className="sidebar-header">
                    <div className="sidebar-title">
                        <h6>{title}</h6>
                    </div>
                    <div className="add-list" onClick={handleOpenModal}><i></i></div>
                    <ModalPortal>
                      <CreateTopicModal visible={modalVisible} onClose={handleCloseModal} topicList={lists}/>
                    </ModalPortal>
                </div>
                <div className="content">
                    <ul>
                        {mapList}
                    </ul>
                    <a href="category.html" className="all-category">View All Categories</a>
                </div>
        </div>
    </div>
    );
}

export default TopicListWidget;
