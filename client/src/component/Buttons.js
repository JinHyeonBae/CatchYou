

import Button from 'react-bootstrap/Button';




function Buttons(props){

    return(
        <div className="buttonBackGround">
            <Button>시선 인식</Button>
            <Button>헤드 포즈</Button>
            <Button>음성 인식</Button>
        </div>
    )
}

export default Buttons