import React from "react";
import "./Modal.css";
import Background from './BackgroundImage/modalbackground.jpg';

const sectionStyle = {
  backgroundImage: `url(${Background})`
}



const Modal = props => <div div className="modal fade" style={(props.modal) ? { display: "block", opacity: 1 } : {}} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content" style={sectionStyle}>
      <div className="modal-header noBorder">
        <h3 className="modal-title blockIt white" id="exampleModalLongTitle">{props.message}</h3>
      </div>
      <div className="modal-body noBorder">
        <img src={props.gif} alt={props.imgName} className="blockIt"/>
      </div>
      <div className="modal-footer noBorder">
      <button type="button" className="btn btn-secondary blockIt" data-dismiss="modal" onClick={props.closeModal}>Close</button>
      </div>
    </div>
  </div>
</div>

export default Modal;