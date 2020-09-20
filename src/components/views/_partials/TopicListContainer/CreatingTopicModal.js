import React, { Fragment, useState } from 'react';
import './creatingTopicModal.scss';
import { useDispatch } from "react-redux";
import { addTopic } from "../../../../_actions/topicAction";
import { useHistory } from 'react-router';
import { withRouter } from "react-router-dom";

function CreatingTopicModal(props){
  const dispatch = useDispatch();

  const [TopicName, setTopicName] = useState("");
  const [TopicType, setTopicType] = useState("");
  const [TopicDesc, setTopicDesc] = useState("");
  const topicTypes = ["Select Category","chatting","calendar", "stockManagement", "financialManagement"];
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newTopic = {
      topicName : TopicName,
      topicType : TopicType,
      topicDesc : TopicDesc,
    };
    dispatch(addTopic(newTopic)).then((response) => {
      console.log('response : ', response);
      if (response.payload.success) {
        history.go(0);
      } else {
        alert("Failed to make a new topic.");
      }
    })
    .catch((req)=>{
      console.log("catched : ", req);
    })
  } 
  
  const onChangeTopic = (e) => {
    setTopicName(e.target.value);
  }
  const onChangeDes = (e) => {
    setTopicDesc(e.target.value);
  }
  const handleOptionChange = (e) => {
    setTopicType(topicTypes[e.target.value])
  }
  return (
    <Fragment>
      {props.visible && (
        <div className="modalOverlay">
        <div className="modalWrapper" tabIndex="-1">
          <div className="modalContent">
            <div className="modalHeader">
              <h3 className="modalTitle">새토픽 생성</h3>
              <div className="modalCloser" onClick={props.onClose}><i></i></div>
            </div>
            
            {/* Creating Topic Model Widget*/}
            <div className="sidebar-widget certificate-widget">
              <div className="widget-content">
                <div className="content">
                  {/* Form */}
                  <div className="styled-form">
                    <form onSubmit={onSubmit}>
                      <div className="form-group">
                          <input type="text" name="topicName" onChange={onChangeTopic} value={TopicName} placeholder="New Topic Name" required />
                      </div>
                      <div className="form-group">
                        <select className="custom-select-box" id="ui-id-1" onChange={handleOptionChange}>
                          <option value={0}>Select Category</option>
                          <option value={1}>채팅</option>
                          <option value={2}>달력</option>
                          <option value={3}>재고관리</option>
                          <option value={4}>재무관리</option>
                        </select>
                        
                       
                      </div>
                      <div className="form-group">
                        <input type="text" name="description" onChange={onChangeDes} value={TopicDesc} placeholder="Description" />
                      </div>
                      
                      <div className="form-group text-center">
                        <button type="submit" className="theme-btn btn-style-two"><span className="txt">생성하기</span></button>
                      </div>
                    </form>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </Fragment>
  )
}

export default withRouter(CreatingTopicModal);
