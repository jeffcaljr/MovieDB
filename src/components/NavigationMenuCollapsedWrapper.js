import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import {Link} from 'react-router-dom'

import NavCategory from "./NavCategory";
import SearchBar from './SearchBar'
import {ALL_POSSIBLE_GENRES, GENRES} from "../constants/genres";
import {contractNav, expandNav} from "../actions/MobileNav";

class NavigationMenuCollapsed extends Component{
    constructor(){
        super();
        this.categorySelected = this.categorySelected.bind(this);

        this.state = {
            selected: 0,
        }
    }


    categorySelected(index){
        this.setState(Object.assign({}, this.state, {selected: index}))
    }

    getLastGenre = () =>{
        const lastGenre = ALL_POSSIBLE_GENRES.find( (genre) => {return genre.id === this.props.lastGenreID})
        if(lastGenre){
            return lastGenre.name
        }
        else{
            return ""
        }

    }



    render(){

        return(

                <div className={this.props.className}>

                    <div className={"sidenav " + (this.props.navOpen ? " w-100 " : " w-0 ") }>

                        <div className="sidenav-elements">

                            <div className="sidenav-header">
                                <div className="nav-action-buttons d-flex align-items-center justify-content-between w-25">
                                    <Link to="/logout" className="p-0">
                                        <i className="fa fa-sign-out text-white" aria-hidden="false"></i>
                                    </Link>
                                    <a
                                        href="#"
                                        className="settings-btn btn">
                                        <i className="fa fa-gear text-white" aria-hidden="false"></i>
                                    </a>
                                </div>

                                <a
                                    href="javascript:void(0)"
                                    className="closebtn"
                                    onClick={() => this.props.closeNav()}>
                                    &times;
                                </a>
                            </div>

                            <SearchBar/>

                            <div className="sidenav-content">
                                {this.props.children}
                            </div>
                        </div>

                    </div>

                    <div className="collapsed-menu-header">

                        <div className="selected-genre-title-container">
                            <h5 className="selected-genre-title text-white typeface-serif text-uppercase">{this.getLastGenre()}</h5>
                        </div>

                        <span className="nav-open-btn" onClick={() => this.props.openNav()}><i className="fa fa-bars text-white"></i></span>

                    </div>



                </div>

        );
    }

}

NavigationMenuCollapsed.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

NavigationMenuCollapsed.defaultProps = {
    className: ""
}

const mapStateToProps = state => {

    return {
        lastGenreID: state.movieListReducer.lastGenreID,
        navOpen: state.mobileNavReducer.expanded
    }
}

const mapDispatchToProps = dispatch => {
    return{
        openNav: () => {
            dispatch(expandNav())
        },
        closeNav: () => {
            dispatch(contractNav())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenuCollapsed);