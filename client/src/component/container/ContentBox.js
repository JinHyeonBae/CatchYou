



import { Bar } from "react-chartjs-2"
import Bars from './Bars'
import Doughnuts from "./Doughnuts"

import '../css/Content.scss'

// 무한로딩에러
function ContentBox(props){

    //type은 그.. 뭐냐 그런 걸로 해야하지 안을까 시선인식이라던가
    const { title, type } = props

    return(
        <div className='contentBox'>
            <div className={title}>
                {title}
            </div>
            <div>
                <Bars/>
                {/* <Doughnut/> */}
            </div>
        </div>
    )
}

export default ContentBox