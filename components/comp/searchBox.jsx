import React from "react";
import Search from '../../src/assets/search.svg'

const searchBox = () => {
    return (
        <>
            <div className="search-box">
                <img src={Search} alt="icon bulunamadi{yuklenemedi}." />
                <input type="text" placeholder="Search" />
            </div>
        </>
    )
};

export default searchBox;
