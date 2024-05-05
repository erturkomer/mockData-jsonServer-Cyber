import React from "react";

const productViewColor = (props) => {
  return (
    <>
    <div className="select-color-view" style={{background: props.color}}>
    </div>
    </>
  )
};

export default productViewColor;
