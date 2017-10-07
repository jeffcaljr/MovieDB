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

            <ul className="list-group categories-list p-2">
                {renderCategories()}

            </ul>

            {/*<DropdownWrapper title={"Categories"}*/}
                             {/*expandedDefault={true}*/}
                             {/*children={*/}
                                 {/*<ul className="list-group categories-list">*/}
                                     {/*{renderCategories()}*/}

                                 {/*</ul>}*/}
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