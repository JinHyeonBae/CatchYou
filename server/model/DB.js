const Mongoose = require('mongoose');

const chatSchema = Mongoose.Schema({
    topic: {
        topicName: String,
        topicType: String,
        topicDes: String,
        chatInfo: {
            sendChat: {
                nickName: String,
                desc: String,
                createdAt: String,
                good: Number,
                replyComment: {
                    nickName: String,
                    desc: String,
                    createdAt: String,
                    good: Number,
                }
            }
        },
        topicUsers :[{
            userId: String,
        }],
        nickName: String
    }
})

//doc
const chatModel = Mongoose.model('test', chatSchema);
module.exports = chatModel;