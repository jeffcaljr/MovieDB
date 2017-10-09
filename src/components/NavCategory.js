import React from 'react'
import PropTypes from 'prop-types'


const NavCategory = (props) => {

    let onSelected = (key) => {
        props.onSelect(key)
    }

    return(
        <div className="nav-category-item d-flex flex-row justify-content-start align-items-center" onClick={() => onSelected(props.index)}>
            <span className={"selected-indicator " + (!props.selected ? "hidden " : "d-inline-block ")}></span>
            <p className={"category-name d-inline-block typeface-sans-serif " +
                            (props.index > 0 //MOVIEDB default Categories
                                ? (props.selected
                                    ? "text-white " //MOVIEDB default category selected
                                    : "text-secondary ")  //MOVIEDB default category un-selected
                                :( props.selected //Custom category
                                    ? " custom-category-selected " //custom category selected
                                    : " custom-category ") //custom category un-selected
                                )}>{props.name}</p>
        </div>
    );
}

NavCategory.propTypes = {
    // selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func,
    index: PropTypes.number.isRequired
}

export default NavCategory;