import React from "react";

const line = (props) => {
    return (
        <>
            <div className="line">
                <p>{props.name}</p>
                <p>{props.title}</p>
            </div>
        </>
    )
};

export default line;
