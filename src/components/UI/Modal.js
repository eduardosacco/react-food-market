import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';


function Backdrop() {
    return (
        <div className={classes.backdrop} />
    )
}

function ModalOverlay(props) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

function Modal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </React.Fragment>
    )
}

export default Modal
