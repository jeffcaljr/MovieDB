import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import NavCategory from "../Functional/NavCategory";
import SearchBar from '../Functional/SearchBar'
import {ALL_POSSIBLE_GENRES, GENRES} from "../../constants/genres";


class NavigationMenuWrapperMobile extends Component{
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

                <div
                    className={this.props.className}
                    ref={(navMenu) => this.navMenu = navMenu}
                >

                    <div className={"sidenav " + (this.props.navOpen ? " w-100 " : " w-0 ") }>

                        <div className="sidenav-elements">

                            <div className="sidenav-header">
                                <div className="nav-action-buttons d-flex align-items-center justify-content-between">
                                    <Link to="/logout" className="p-1">
                                        <i className="fa fa-sign-out text-white p-1" aria-hidden="false"></i>
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
                                <div className="sidenav-content-holder">
                                    {this.props.children}
                                </div>
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

    componentDidUpdate(){

        if(this.props.navOpen === true){
            // alert("should scroll to top");
            this.navMenu.scrollTop = 0;
        }
    }

}

NavigationMenuWrapperMobile.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

NavigationMenuWrapperMobile.defaultProps = {
    className: ""
}

export default NavigationMenuWrapperMobile;
