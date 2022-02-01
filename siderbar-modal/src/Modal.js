import React from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";

const Modal = ({open, onClose, children}) => {
  if(!open) return null;
	return ReactDOM.createPortal(
		<div
			className={`${
				open ? "modal-overlay show-modal" : "modal-overlay"
			}`}
		>
			<div className="modal-container">
        <div className="modal-header">
          <div className="modal-title">Modal Header</div>
          <div className="modal-actions">
            <button className="close-modal-btn" onClick={onClose}>
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="modal-body">
				  {children}
        </div>
			</div>
		</div>,
    document.getElementById('portal')
	);
};

export default Modal;
