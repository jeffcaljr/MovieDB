import React from 'react'
import PropTypes from 'prop-types'


import {Link} from 'react-router-dom'

import {ALL_POSSIBLE_GENRES, GENRES, TRENDING_GENRE} from "../../constants/genres";
import SearchBar from '../Functional/SearchBar'

const NavigationMenuWrapper  = (props) => {

    const getLastGenre = () =>{
        const lastGenre = ALL_POSSIBLE_GENRES.find( (genre) => {return genre.id === props.lastGenreID})
        if(lastGenre){
            return lastGenre.name
        }
        else{
            return ""
        }

    }

    return(
        <div className={props.className}>

            <div className="header w-100 d-flex justify-content-between align-items-center p-2">
                <Link to="/logout">
                    <i className="fa fa-sign-out text-white" aria-hidden="false"></i>
                </Link>
                <i className="fa fa-gear text-white" aria-hidden="false"></i>


            </div>


            <SearchBar/>

            <div className="selected-genre-title-container">
                <h5 className="selected-genre-title text-white">
                    {
                        getLastGenre() != ""
                            ? (<span ><span className="text-muted typeface-serif text-uppercase small text-info">Viewing: </span> <span className="current-genre typeface-serif text-uppercase">{getLastGenre()}</span></span>)
                        : ""
                    }
                </h5>
            </div>

            {props.children}

        </div>


    );

}

NavigationMenuWrapper.propTypes = {

    className: PropTypes.string,
    children: PropTypes.node
}

NavigationMenuWrapper.defaultProps = {
    className: ""
}

export default NavigationMenuWrapper;