import reactDOM from "react-dom";

const ModalPortal = ({children}) =>{
    const element = document.querySelector('#modal-root');
    return reactDOM.createPortal(children, element);
}

export default ModalPortal;