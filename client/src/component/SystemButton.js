




export default function SystemButton(){

    const Style ={
        divStyle : {
            position : 'relative',
            width : '100%',
            height : '10%',
            backgroundColor : 'lavender'
        },
        buttonStyle : {
            textDecoration: 'none',
            color : 'black',
            margin : '0.5rem'
        }
    }

    const lc = "http://localhost:3000"

    return(
        <div style={Style.divStyle}>
            <a href={`${lc}/pupil`} style={Style.buttonStyle} id="pupil_reg">시선 인식</a>
            <a href={`${lc}/person`} style={Style.buttonStyle} id="person_reg">사람 인식</a>
            <a href={`${lc}/sound`} style={Style.buttonStyle} id="sound_reg">음성 인식</a>
            <a href={`${lc}`} style={Style.buttonStyle} id="sound_reg">홈</a>
        </div>
    )
}