import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import NavCategory from "./NavCategory";
import DropdownWrapper from "./DropdownWrapper";
import {load} from "../actions/MovieList";
import {TRENDING_GENRE} from "../constants/genres";
import SearchBar from './SearchBar'

const NavigationMenu  = (props) => {

    return(
        <div className={props.className}>

            <i className="fa fa-gear text-white pull-right" aria-hidden="false"></i>

            <SearchBar/>

            {props.children}

        </div>


    );

}

NavigationMenu.propTypes = {

    className: PropTypes.string,
    children: PropTypes.node
}

NavigationMenu.defaultProps = {
    className: ""
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return{
        loadGenre: genreID => {
            dispatch(load(genreID))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);