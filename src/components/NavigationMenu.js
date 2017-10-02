import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import NavCategory from "./NavCategory";
import DropdownWrapper from "./DropdownWrapper";
import {load} from "../actions/MovieList";
import {TRENDING_GENRE} from "../constants/genres";

const NavigationMenu  = (props) => {


    const renderCategories = () => {

        let categoriesJSX = [];

        props.categories.map((category) => {
            let newCategory = <li><NavCategory
                key={category.id} index={category.id}
                name={category.name}></NavCategory></li>;
            categoriesJSX.push(newCategory);
        })

        return categoriesJSX;
    }


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


            <div className="nav-category-item"
                 onClick={() => props.loadGenre(TRENDING_GENRE.id)}>
                <h3 className="text-white font-weight-bold">Trending</h3>
            </div>



            <DropdownWrapper title={"Categories"}
                             children={
                                 <ul className="list-group categories-list">
                                     {renderCategories()}

                                 </ul>}
            />

        </div>


    );

}

NavigationMenu.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string

    })).isRequired,
    className: PropTypes.string,
}

NavigationMenu.defaultProps = {
    categories: [],
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