import styles from './Modal.module.css';
import React, { Fragment } from 'react';
import ReactDOM from "react-dom";

const Backdrop = props => {
    return (
        <div className={styles.backdrop} onClick={props.onClose}/>
    )
};

const ModalOverlay = props => {
    return (
        <div className={styles.modal}>
            <div>{props.children}</div>
        </div>
    )
};

const portalElement = document.getElementById('overlays');

const Modal = props => {


    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        </Fragment>
    )
};

export default Modal;