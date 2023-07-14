import React from 'react';

const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className='modal-container'>
        <div className="model-overlay">


            <div className="modal-header">
                <button className="model-close" onClick={onClose}>
                    {/* <span>&times;</span> */}
                    close
                </button>
            </div>
            <div className="modal-body">{children}</div>


        </div>
        </div>
    );
};

export default Modal;