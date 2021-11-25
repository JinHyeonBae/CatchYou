
import '../cheating_system.css'





export default function PersonCounting(props){
    console.log(props)
    const location_array  = props.personDetection

    return(
        <div className="person_counting">
            <h2>현재 화면에 입력된 사람의 수는</h2>
            <h1>{location_array.length}명입니다.</h1>
        </div>
    )
}