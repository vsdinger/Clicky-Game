import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
<div className="card-container">
<span onClick={() => props.selectImage(props.id)}>
  <div className="card float-left">

  <img className="card-img-top content img-container" src={props.image} alt={props.name} />

  </div>
  </span>
  </div>
);

export default ImageCard;