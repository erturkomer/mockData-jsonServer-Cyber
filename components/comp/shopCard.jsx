import React from "react";

const shopCard = (props) => {
  return (
    <>
    <div className="shop-card" style={{border: `1px solid ${props.border}` ,background: props.background, color: props.color}}>
        {props.name}
    </div>
    </>
  )
};

export default shopCard;
