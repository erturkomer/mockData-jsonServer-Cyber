import React from "react";

const productViewDetails = (props) => {
  return (
    <>
    <div className="details-card">
        <img src={props.image} alt="" />
        <div className="detail-card">
            <p>{props.name}</p>
            <span>{props.detail}</span>
        </div>
    </div>
    </>
  )
};

export default productViewDetails;
