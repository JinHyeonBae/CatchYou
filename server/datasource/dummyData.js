const mongoose = require('mongoose');
const chatModel = require('../model/DB.js');


const date = new Date();
const Thetime = date.getTime().toString;
const aData = {
    topic: {
        topicName: '공지사항',
        topicType: 'public',
        topicDes: '이 토픽은 모든 정회원이 자동 참여되며 나갈 수 없음',
        chatInfo: {
            sendChat: {
                nickName: 'DB_배진현',
                desc: '테스트입니다.',
                createdAt: Thetime,
                good: 0
            }
        },
        topicUsers: [{
            userId: 'brqwr2',
        }],
    },
    nickName: 'DB_배진현'
};

module.exports = aData;

/*mongoose.connect('mongodb://localhost:27017/local', {useNewUrlParser: true ,useUnifiedTopology: true });
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection err'));
db.once('open', function(callback){
    console.log('db 열림');
    const getData = new chatModel(aData);
    getData.save();
})*/


