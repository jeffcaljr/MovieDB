import {connect} from 'react-redux'
import {load} from "../../actions/MovieList";
import {menuItemChosen} from "../../actions/MobileNav";
import NavCategory from "../NavCategory";


const mapStateToProps = (state, ownProps) => {
    return {
        selected: state.movieListReducer.lastGenreID === ownProps.index
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onSelect: genreID => {
            dispatch(load(genreID))
            dispatch(menuItemChosen())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavCategory);