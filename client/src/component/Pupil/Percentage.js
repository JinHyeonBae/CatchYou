





export default function Percentage(props){

    console.log("props :", props.percent)
    const { cheat_percentage    } = props.percent
    console.log(cheat_percentage)

    return(
        <div>
            {cheat_percentage}
        </div>

    )
}