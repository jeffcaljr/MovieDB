import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {load} from "../actions/MovieList";


const NavCategory = (props) => {

    let onSelected = (key) => {
        props.onSelect(key)
    }

    return(
        <div className="nav-category-item d-flex flex-row justify-content-start align-items-center" onClick={() => onSelected(props.index)}>
            <span className={"selected-indicator " + (!props.selected ? "hidden " : "d-inline-block ")}></span>
            <span className={"category-name d-inline-block " + (props.selected ? "text-white " : "text-secondary ")}>{props.name}</span>
        </div>
    );
}

NavCategory.propTypes = {
    // selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func,
    index: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        selected: state.movieListReducer.lastGenreID === ownProps.index
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onSelect: genreID => {
            dispatch(load(genreID))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavCategory);