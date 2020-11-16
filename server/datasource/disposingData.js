const {RESTDataSource} = require('apollo-datasource-rest');


//추가 설정없이 REST 리소스 응답을 자동으로 캐시
class ChatAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL =  'https://api.spacexdata.com/v2/';
    }
    async getAllChatData(){
        const response = await this.get('launches'); //url의 뒤에 오는 querystring
        return Array.isArray(response)?
        response.map(launch => this.launchReducer(launch))
        : []
    }
    
} 



module.exports = ChatAPI;