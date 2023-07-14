import React from "react"


const Modal = ({ setOnClose }) => {

    <div className="model-overlay">
        <button className="model-close" onClick={() => setOnClose(false)}>Close</button>
        <p className="modal">This is the content of the modal</p>
    </div>
}

export default Modal;