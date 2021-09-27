

import { Doughnut } from 'react-chartjs-2'
import ContentBox from './ContentBox'

import Doughnuts from './Doughnuts'
import Bars from './Bars'


// 어디서 무한로딩을 발생시키는가..
function Content(){

    //여기서 데이터를 받는다
    console.log("hello")

    return(
        <div className='content'>
            <Bars type = "bar" title="최근 5초간 시선의 위치"></Bars>
            <Doughnuts type = "circle" title="부정행위 감지 확률"></Doughnuts>
        </div>
    )
}


export default Content