






export default function PersonCounting(props){

    const { number_of_person } = props.personDetection

    return(
        <div>
            <h2>현재 화면에 입력된 사람의 수는</h2>
            {number_of_person}
        </div>
    )
}