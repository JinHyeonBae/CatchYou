
//const data = require('../datasource/dummyData');
//require은 module.exports를 반환한다.


//리졸버는 특정 필드의 데이터를 반환하는 함수.

const topicInfo = {
    topicName: "공지사항",
    topicType: "public",
    topicDes: "이 토픽은 모든 정회원이 자동 참여되며 나갈 수 없음",
    nickName: "DB_배진현",
    chatInfo:[{
        content :'hihi',
        createdAt : '12:54'
    }]
};

const resolveFunctions = {
    Query: {
        topic: ()=> topicInfo
    },
    Mutation :{
        addChat :async(_,args)=>{
            console.log(args);
            const {content, createdAt} = args;
            const data = {
                content,
                createdAt
            }
            await topicInfo.chatInfo.push(data);
            return topicInfo.chatInfo;   
        }
    }
}

module.exports = resolveFunctions;