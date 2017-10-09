import {connect} from 'react-redux'
import {searchMovies} from "../../actions/MovieList";
import {menuItemChosen} from "../../actions/MobileNav";
import SearchBar from "../Presentational/SearchBar";

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        search: queryString => {
            dispatch(searchMovies(queryString))
            dispatch(menuItemChosen())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);