

const chatModel = require('../model/DB.js');

class topic{
    constructor() {
        this.findTopicInfo=(title)=>{
            const topicInfo = chatModel.find({}, (error, data) => {
                if(error) return error;
                return data;
            });
            return topicInfo;
        };
    }
}

module.exports = {topic}; 