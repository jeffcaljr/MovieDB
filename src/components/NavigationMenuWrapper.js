import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import NavCategory from "./NavCategory";
import DropdownWrapper from "./DropdownWrapper";
import {load} from "../actions/MovieList";
import {TRENDING_GENRE} from "../constants/genres";

const NavigationMenu  = (props) => {

    return(
        <div className={props.className}>

            <i className="fa fa-gear text-white pull-right" aria-hidden="false"></i>

            <div className="nav-item input-group">
                <form className="input-group">
                    <input className="form-control" type="text" placeholder="Search"/>
                    <div className="input-group-btn">
                        <button className="btn btn-primary">
                            <i className="fa fa-search text-white"></i>
                        </button>

                    </div>

                </form>
            </div>

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