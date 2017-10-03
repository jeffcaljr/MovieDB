import React from 'react'

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="input-group search-form">
                <input type="text" className="form-control p-1" placeholder="Search for..."/>
                <span className="input-group-btn">
                <button className="btn btn-secondary borderless p-2" type="button">
                    <i className="fa fa-search"></i>
                </button>
            </span>
            </div>
        </div>
    );
}

export default SearchBar;