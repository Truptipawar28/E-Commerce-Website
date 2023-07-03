import { Fragment } from "react";
import ReactDOM from "react-dom";
import './Modal.module.css';

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm}></div>;
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlay");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;