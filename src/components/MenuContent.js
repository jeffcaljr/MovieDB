import React from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import {TRENDING_GENRE} from "../constants/genres";
import DropdownWrapper from "./DropdownWrapper";
import NavCategory from './NavCategory'
import {load} from "../actions/MovieList";


const MenuContent = ({categories, loadGenre}) => {

    const renderCategories = () => {

        let categoriesJSX = [];

        categories.map((category) => {
            let newCategory = <li key={category.id}><NavCategory
                index={category.id}
                name={category.name}></NavCategory></li>;
            categoriesJSX.push(newCategory);
        })

        return categoriesJSX;
    }

    return (
        <div className="menu-content">
            <div className="nav-category-item"
                 onClick={() => loadGenre(TRENDING_GENRE.id)}>
                <h3 className="text-white">Trending</h3>
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

MenuContent.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string

    })).isRequired,
}

MenuContent.defaultProps = {
    categories: []
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


export default connect(mapStateToProps, mapDispatchToProps)(MenuContent)